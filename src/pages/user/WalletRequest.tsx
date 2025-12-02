import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Wallet, Upload, FileText, Clock, CheckCircle, XCircle, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import walletAPI, { WalletTopupRequest } from '@/api/wallet';

interface WalletRequest {
  _id: string;
  amount: number;
  walletType: string;
  requestDetails?: string;
  screenshot: string;
  status: 'pending' | 'approved' | 'rejected';
  paymentMethod: string;
  transactionId?: string;
  rejectionReason?: string;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

const WalletRequest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [requests, setRequests] = useState<WalletRequest[]>([]);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    walletType: 'purchaseWallet',
    amount: '',
    requestDetails: '',
    paymentMethod: 'bank',
    transactionId: '',
  });

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await walletAPI.getUserTopupRequests();
      if (response.success && response.data) {
        const data: WalletTopupRequest[] = Array.isArray(response.data) 
          ? response.data 
          : [response.data];
        // Map WalletTopupRequest to WalletRequest by adding missing fields
        const mappedRequests: WalletRequest[] = data.map((item: WalletTopupRequest) => ({
          _id: item._id || '',
          amount: item.amount,
          walletType: 'purchaseWallet', // Default value since API doesn't return this
          screenshot: item.screenshot,
          status: item.status,
          paymentMethod: 'bank', // Default value since API doesn't return this
          transactionId: item.transactionId,
          rejectionReason: item.rejectionReason,
          createdAt: item.createdAt || '',
          updatedAt: item.updatedAt || '',
        }));
        setRequests(mappedRequests);
      }
    } catch (error: any) {
      console.error('Failed to load wallet requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      setScreenshotFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (!screenshotFile) {
      toast.error('Please upload a payment screenshot');
      return;
    }

    try {
      setSubmitting(true);

      const formDataToSend = new FormData();
      formDataToSend.append('walletType', formData.walletType);
      formDataToSend.append('amount', formData.amount);
      formDataToSend.append('requestDetails', formData.requestDetails);
      formDataToSend.append('paymentMethod', formData.paymentMethod);
      if (formData.transactionId) {
        formDataToSend.append('transactionId', formData.transactionId);
      }
      formDataToSend.append('screenshot', screenshotFile);

      const token = localStorage.getItem('token');
      const response = await fetch('https://api.mybyoliva.com/wallet/topup/request', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit wallet request');
      }

      const result = await response.json();
      if (result.success) {
        toast.success('Wallet request submitted successfully!');
        // Reset form
        setFormData({
          walletType: 'purchaseWallet',
          amount: '',
          requestDetails: '',
          paymentMethod: 'bank',
          transactionId: '',
        });
        setScreenshotFile(null);
        setScreenshotPreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        // Refresh requests
        fetchRequests();
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit wallet request');
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <Badge className="bg-green-100 text-green-800 border-green-300">
            <CheckCircle className="h-3 w-3 mr-1" />
            Approved
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-100 text-red-800 border-red-300">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      default:
        return null;
    }
  };

  const getWalletTypeName = (walletType: string) => {
    switch (walletType) {
      case 'purchaseWallet':
        return 'Shopping Wallet';
      case 'earnedWallet':
        return 'Earned Wallet';
      case 'referralWallet':
        return 'Referral Wallet';
      default:
        return walletType;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-emerald-50/30 via-white to-emerald-50/20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-3"
      >
        <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-lg backdrop-blur-sm ring-1 ring-amber-300/20">
          <Wallet className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
          Wallet Request
        </h1>
      </motion.div>

      {/* Request Form */}
      <Card className="border-emerald-200/50 bg-white/70 backdrop-blur-xl shadow-lg ring-1 ring-amber-400/10">
        <CardHeader>
          <CardTitle className="text-xl text-emerald-800">Create Wallet Request</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="walletType" className="text-emerald-800">
                  Wallet Type <span className="text-red-500">*</span>
                </Label>
                <select
                  id="walletType"
                  value={formData.walletType}
                  onChange={(e) => setFormData(prev => ({ ...prev, walletType: e.target.value }))}
                  className="w-full p-2 border border-emerald-200/50 bg-white/80 backdrop-blur-sm rounded-md ring-1 ring-amber-400/10"
                  required
                  disabled
                >
                  <option value="purchaseWallet">Shopping Wallet</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-emerald-800">
                  Total Amount <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="Enter amount"
                  className="border-emerald-200/50 bg-white/80 backdrop-blur-sm ring-1 ring-amber-400/10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requestDetails" className="text-emerald-800">Request Details</Label>
              <Textarea
                id="requestDetails"
                value={formData.requestDetails}
                onChange={(e) => setFormData(prev => ({ ...prev, requestDetails: e.target.value }))}
                placeholder="Enter any additional details about your request..."
                className="w-full p-3 border border-emerald-200/50 bg-white/80 backdrop-blur-sm rounded-md h-24 ring-1 ring-amber-400/10"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paymentMethod" className="text-emerald-800">
                  Payment Method <span className="text-red-500">*</span>
                </Label>
                <select
                  id="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                  className="w-full p-2 border border-emerald-200/50 bg-white/80 backdrop-blur-sm rounded-md ring-1 ring-amber-400/10"
                  required
                >
                  <option value="bank">Bank Transfer</option>
                  <option value="upi">UPI</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transactionId" className="text-emerald-800">Transaction ID</Label>
                <Input
                  id="transactionId"
                  type="text"
                  value={formData.transactionId}
                  onChange={(e) => setFormData(prev => ({ ...prev, transactionId: e.target.value }))}
                  placeholder="Enter transaction ID (optional)"
                  className="border-emerald-200/50 bg-white/80 backdrop-blur-sm ring-1 ring-amber-400/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="screenshot" className="text-emerald-800">
                Payment Screenshot <span className="text-red-500">*</span>
              </Label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <div className="flex items-center space-x-4">
                {screenshotPreview ? (
                  <div className="space-y-2">
                    <img
                      src={screenshotPreview}
                      alt="Screenshot preview"
                      className="w-32 h-32 object-cover rounded-lg border-2 border-emerald-200/50"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Change Image
                    </Button>
                  </div>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="h-32 w-32 border-dashed flex flex-col items-center justify-center"
                  >
                    <ImageIcon className="h-8 w-8 mb-2 text-emerald-600" />
                    <span className="text-sm">Choose File</span>
                  </Button>
                )}
                {screenshotFile && (
                  <p className="text-sm text-emerald-700">{screenshotFile.name}</p>
                )}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-amber-500 hover:from-emerald-700 hover:to-amber-600 text-white shadow-lg ring-1 ring-amber-300/30"
              >
                <FileText className="h-4 w-4 mr-2" />
                {submitting ? 'Submitting...' : 'SUBMIT'}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>

      {/* Request History */}
      <Card className="border-emerald-200/50 bg-white/70 backdrop-blur-xl shadow-lg ring-1 ring-amber-400/10">
        <CardHeader>
          <CardTitle className="text-xl text-emerald-800">Request History</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
            </div>
          ) : requests.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No wallet requests found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Wallet Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Screenshot</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((request) => (
                    <tr key={request._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(request.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {getWalletTypeName(request.walletType)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-700">
                        {formatCurrency(request.amount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                        {request.paymentMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(request.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {request.screenshot && (
                          <a
                            href={request.screenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:text-emerald-800"
                          >
                            <ImageIcon className="h-5 w-5" />
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletRequest;

