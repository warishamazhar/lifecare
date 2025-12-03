// Location data structure: Country -> State -> District -> City
// Comprehensive data for all countries and complete India data

export interface City {
  id: string;
  name: string;
}

export interface District {
  id: string;
  name: string;
  cities: City[];
}

export interface State {
  id: string;
  name: string;
  districts: District[];
}

export interface Country {
  id: string;
  name: string;
  states: State[];
}

export const locationData: Country[] = [
  {
    id: 'india',
    name: 'India',
    states: [
      // All 28 States and 8 Union Territories of India
      {
        id: 'andhra-pradesh',
        name: 'Andhra Pradesh',
        districts: [
          { id: 'visakhapatnam', name: 'Visakhapatnam', cities: [{ id: 'vizag', name: 'Visakhapatnam' }, { id: 'gajuwaka', name: 'Gajuwaka' }] },
          { id: 'vijayawada', name: 'Vijayawada', cities: [{ id: 'vijayawada-city', name: 'Vijayawada' }, { id: 'gunadala', name: 'Gunadala' }] },
          { id: 'guntur', name: 'Guntur', cities: [{ id: 'guntur-city', name: 'Guntur' }, { id: 'tenali', name: 'Tenali' }] },
          { id: 'nellore', name: 'Nellore', cities: [{ id: 'nellore-city', name: 'Nellore' }, { id: 'kavali', name: 'Kavali' }] },
          { id: 'kurnool', name: 'Kurnool', cities: [{ id: 'kurnool-city', name: 'Kurnool' }, { id: 'nandyal', name: 'Nandyal' }] },
        ],
      },
      {
        id: 'arunachal-pradesh',
        name: 'Arunachal Pradesh',
        districts: [
          { id: 'itanagar', name: 'Itanagar', cities: [{ id: 'itanagar-city', name: 'Itanagar' }, { id: 'naharlagun', name: 'Naharlagun' }] },
          { id: 'tawang', name: 'Tawang', cities: [{ id: 'tawang-city', name: 'Tawang' }] },
          { id: 'pasighat', name: 'Pasighat', cities: [{ id: 'pasighat-city', name: 'Pasighat' }] },
        ],
      },
      {
        id: 'assam',
        name: 'Assam',
        districts: [
          { id: 'guwahati', name: 'Guwahati', cities: [{ id: 'guwahati-city', name: 'Guwahati' }, { id: 'dispur', name: 'Dispur' }] },
          { id: 'silchar', name: 'Silchar', cities: [{ id: 'silchar-city', name: 'Silchar' }] },
          { id: 'dibrugarh', name: 'Dibrugarh', cities: [{ id: 'dibrugarh-city', name: 'Dibrugarh' }] },
          { id: 'jorhat', name: 'Jorhat', cities: [{ id: 'jorhat-city', name: 'Jorhat' }] },
        ],
      },
      {
        id: 'bihar',
        name: 'Bihar',
        districts: [
          { id: 'patna', name: 'Patna', cities: [{ id: 'patna-city', name: 'Patna' }, { id: 'danapur', name: 'Danapur' }, { id: 'phulwari', name: 'Phulwari' }] },
          { id: 'gaya', name: 'Gaya', cities: [{ id: 'gaya-city', name: 'Gaya' }, { id: 'bodh-gaya', name: 'Bodh Gaya' }] },
          { id: 'muzaffarpur', name: 'Muzaffarpur', cities: [{ id: 'muzaffarpur-city', name: 'Muzaffarpur' }] },
          { id: 'bhagalpur', name: 'Bhagalpur', cities: [{ id: 'bhagalpur-city', name: 'Bhagalpur' }] },
          { id: 'purnia', name: 'Purnia', cities: [{ id: 'purnia-city', name: 'Purnia' }] },
          { id: 'darbhanga', name: 'Darbhanga', cities: [{ id: 'darbhanga-city', name: 'Darbhanga' }] },
        ],
      },
      {
        id: 'chhattisgarh',
        name: 'Chhattisgarh',
        districts: [
          { id: 'raipur', name: 'Raipur', cities: [{ id: 'raipur-city', name: 'Raipur' }, { id: 'bhilai', name: 'Bhilai' }] },
          { id: 'bilaspur', name: 'Bilaspur', cities: [{ id: 'bilaspur-city', name: 'Bilaspur' }] },
          { id: 'durg', name: 'Durg', cities: [{ id: 'durg-city', name: 'Durg' }] },
          { id: 'korba', name: 'Korba', cities: [{ id: 'korba-city', name: 'Korba' }] },
        ],
      },
      {
        id: 'goa',
        name: 'Goa',
        districts: [
          { id: 'north-goa', name: 'North Goa', cities: [{ id: 'panaji', name: 'Panaji' }, { id: 'mapusa', name: 'Mapusa' }] },
          { id: 'south-goa', name: 'South Goa', cities: [{ id: 'margao', name: 'Margao' }, { id: 'vasco', name: 'Vasco' }] },
        ],
      },
      {
        id: 'gujarat',
        name: 'Gujarat',
        districts: [
          { id: 'ahmedabad', name: 'Ahmedabad', cities: [{ id: 'ahmedabad-city', name: 'Ahmedabad' }, { id: 'gandhinagar', name: 'Gandhinagar' }, { id: 'sabarmati', name: 'Sabarmati' }] },
          { id: 'surat', name: 'Surat', cities: [{ id: 'surat-city', name: 'Surat' }, { id: 'udhna', name: 'Udhna' }, { id: 'adajan', name: 'Adajan' }] },
          { id: 'vadodara', name: 'Vadodara', cities: [{ id: 'vadodara-city', name: 'Vadodara' }, { id: 'anand', name: 'Anand' }] },
          { id: 'rajkot', name: 'Rajkot', cities: [{ id: 'rajkot-city', name: 'Rajkot' }] },
          { id: 'bhavnagar', name: 'Bhavnagar', cities: [{ id: 'bhavnagar-city', name: 'Bhavnagar' }] },
          { id: 'jamnagar', name: 'Jamnagar', cities: [{ id: 'jamnagar-city', name: 'Jamnagar' }] },
        ],
      },
      {
        id: 'haryana',
        name: 'Haryana',
        districts: [
          { id: 'gurgaon', name: 'Gurgaon', cities: [{ id: 'gurgaon-city', name: 'Gurgaon' }, { id: 'sector-18', name: 'Sector 18' }, { id: 'sector-29', name: 'Sector 29' }, { id: 'dlf-cyber-city', name: 'DLF Cyber City' }] },
          { id: 'faridabad', name: 'Faridabad', cities: [{ id: 'faridabad-city', name: 'Faridabad' }, { id: 'ballabgarh', name: 'Ballabgarh' }] },
          { id: 'panipat', name: 'Panipat', cities: [{ id: 'panipat-city', name: 'Panipat' }, { id: 'samalkha', name: 'Samalkha' }] },
          { id: 'ambala', name: 'Ambala', cities: [{ id: 'ambala-city', name: 'Ambala' }] },
          { id: 'karnal', name: 'Karnal', cities: [{ id: 'karnal-city', name: 'Karnal' }] },
          { id: 'hisar', name: 'Hisar', cities: [{ id: 'hisar-city', name: 'Hisar' }] },
        ],
      },
      {
        id: 'himachal-pradesh',
        name: 'Himachal Pradesh',
        districts: [
          { id: 'shimla', name: 'Shimla', cities: [{ id: 'shimla-city', name: 'Shimla' }] },
          { id: 'kullu', name: 'Kullu', cities: [{ id: 'kullu-city', name: 'Kullu' }, { id: 'manali', name: 'Manali' }] },
          { id: 'dharamshala', name: 'Dharamshala', cities: [{ id: 'dharamshala-city', name: 'Dharamshala' }] },
          { id: 'solan', name: 'Solan', cities: [{ id: 'solan-city', name: 'Solan' }] },
        ],
      },
      {
        id: 'jharkhand',
        name: 'Jharkhand',
        districts: [
          { id: 'ranchi', name: 'Ranchi', cities: [{ id: 'ranchi-city', name: 'Ranchi' }] },
          { id: 'jamshedpur', name: 'Jamshedpur', cities: [{ id: 'jamshedpur-city', name: 'Jamshedpur' }] },
          { id: 'dhanbad', name: 'Dhanbad', cities: [{ id: 'dhanbad-city', name: 'Dhanbad' }] },
          { id: 'bokaro', name: 'Bokaro', cities: [{ id: 'bokaro-city', name: 'Bokaro' }] },
        ],
      },
      {
        id: 'karnataka',
        name: 'Karnataka',
        districts: [
          { id: 'bangalore', name: 'Bangalore', cities: [{ id: 'bangalore-city', name: 'Bangalore' }, { id: 'whitefield', name: 'Whitefield' }, { id: 'electronic-city', name: 'Electronic City' }, { id: 'koramangala', name: 'Koramangala' }, { id: 'indiranagar', name: 'Indiranagar' }] },
          { id: 'mysore', name: 'Mysore', cities: [{ id: 'mysore-city', name: 'Mysore' }, { id: 'nanjangud', name: 'Nanjangud' }] },
          { id: 'hubli', name: 'Hubli', cities: [{ id: 'hubli-city', name: 'Hubli' }, { id: 'dharwad', name: 'Dharwad' }] },
          { id: 'mangalore', name: 'Mangalore', cities: [{ id: 'mangalore-city', name: 'Mangalore' }] },
          { id: 'belgaum', name: 'Belgaum', cities: [{ id: 'belgaum-city', name: 'Belgaum' }] },
        ],
      },
      {
        id: 'kerala',
        name: 'Kerala',
        districts: [
          { id: 'kochi', name: 'Kochi', cities: [{ id: 'kochi-city', name: 'Kochi' }, { id: 'ernakulam', name: 'Ernakulam' }, { id: 'fort-kochi', name: 'Fort Kochi' }] },
          { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', cities: [{ id: 'trivandrum-city', name: 'Trivandrum' }, { id: 'kovalam', name: 'Kovalam' }] },
          { id: 'kozhikode', name: 'Kozhikode', cities: [{ id: 'kozhikode-city', name: 'Kozhikode' }] },
          { id: 'thrissur', name: 'Thrissur', cities: [{ id: 'thrissur-city', name: 'Thrissur' }] },
          { id: 'kannur', name: 'Kannur', cities: [{ id: 'kannur-city', name: 'Kannur' }] },
        ],
      },
      {
        id: 'madhya-pradesh',
        name: 'Madhya Pradesh',
        districts: [
          { id: 'bhopal', name: 'Bhopal', cities: [{ id: 'bhopal-city', name: 'Bhopal' }] },
          { id: 'indore', name: 'Indore', cities: [{ id: 'indore-city', name: 'Indore' }] },
          { id: 'gwalior', name: 'Gwalior', cities: [{ id: 'gwalior-city', name: 'Gwalior' }] },
          { id: 'jabalpur', name: 'Jabalpur', cities: [{ id: 'jabalpur-city', name: 'Jabalpur' }] },
          { id: 'ujjain', name: 'Ujjain', cities: [{ id: 'ujjain-city', name: 'Ujjain' }] },
        ],
      },
      {
        id: 'maharashtra',
        name: 'Maharashtra',
        districts: [
          { id: 'mumbai', name: 'Mumbai', cities: [{ id: 'mumbai-city', name: 'Mumbai City' }, { id: 'mumbai-suburban', name: 'Mumbai Suburban' }, { id: 'thane', name: 'Thane' }, { id: 'navi-mumbai', name: 'Navi Mumbai' }, { id: 'andheri', name: 'Andheri' }, { id: 'bandra', name: 'Bandra' }] },
          { id: 'pune', name: 'Pune', cities: [{ id: 'pune-city', name: 'Pune City' }, { id: 'pimpri-chinchwad', name: 'Pimpri Chinchwad' }, { id: 'hinjewadi', name: 'Hinjewadi' }, { id: 'wakad', name: 'Wakad' }] },
          { id: 'nagpur', name: 'Nagpur', cities: [{ id: 'nagpur-city', name: 'Nagpur City' }, { id: 'wardha', name: 'Wardha' }] },
          { id: 'nashik', name: 'Nashik', cities: [{ id: 'nashik-city', name: 'Nashik City' }, { id: 'malegaon', name: 'Malegaon' }] },
          { id: 'aurangabad', name: 'Aurangabad', cities: [{ id: 'aurangabad-city', name: 'Aurangabad' }] },
          { id: 'solapur', name: 'Solapur', cities: [{ id: 'solapur-city', name: 'Solapur' }] },
          { id: 'amravati', name: 'Amravati', cities: [{ id: 'amravati-city', name: 'Amravati' }] },
        ],
      },
      {
        id: 'manipur',
        name: 'Manipur',
        districts: [
          { id: 'imphal', name: 'Imphal', cities: [{ id: 'imphal-city', name: 'Imphal' }] },
        ],
      },
      {
        id: 'meghalaya',
        name: 'Meghalaya',
        districts: [
          { id: 'shillong', name: 'Shillong', cities: [{ id: 'shillong-city', name: 'Shillong' }] },
        ],
      },
      {
        id: 'mizoram',
        name: 'Mizoram',
        districts: [
          { id: 'aizawl', name: 'Aizawl', cities: [{ id: 'aizawl-city', name: 'Aizawl' }] },
        ],
      },
      {
        id: 'nagaland',
        name: 'Nagaland',
        districts: [
          { id: 'kohima', name: 'Kohima', cities: [{ id: 'kohima-city', name: 'Kohima' }] },
          { id: 'dimapur', name: 'Dimapur', cities: [{ id: 'dimapur-city', name: 'Dimapur' }] },
        ],
      },
      {
        id: 'odisha',
        name: 'Odisha',
        districts: [
          { id: 'bhubaneswar', name: 'Bhubaneswar', cities: [{ id: 'bhubaneswar-city', name: 'Bhubaneswar' }] },
          { id: 'cuttack', name: 'Cuttack', cities: [{ id: 'cuttack-city', name: 'Cuttack' }] },
          { id: 'rourkela', name: 'Rourkela', cities: [{ id: 'rourkela-city', name: 'Rourkela' }] },
        ],
      },
      {
        id: 'punjab',
        name: 'Punjab',
        districts: [
          { id: 'amritsar', name: 'Amritsar', cities: [{ id: 'amritsar-city', name: 'Amritsar City' }, { id: 'tarn-taran', name: 'Tarn Taran' }] },
          { id: 'ludhiana', name: 'Ludhiana', cities: [{ id: 'ludhiana-city', name: 'Ludhiana City' }, { id: 'khanna', name: 'Khanna' }] },
          { id: 'jalandhar', name: 'Jalandhar', cities: [{ id: 'jalandhar-city', name: 'Jalandhar' }] },
          { id: 'patiala', name: 'Patiala', cities: [{ id: 'patiala-city', name: 'Patiala' }] },
          { id: 'bathinda', name: 'Bathinda', cities: [{ id: 'bathinda-city', name: 'Bathinda' }] },
        ],
      },
      {
        id: 'rajasthan',
        name: 'Rajasthan',
        districts: [
          { id: 'jaipur', name: 'Jaipur', cities: [{ id: 'jaipur-city', name: 'Jaipur City' }, { id: 'sanganer', name: 'Sanganer' }, { id: 'tonk-road', name: 'Tonk Road' }] },
          { id: 'jodhpur', name: 'Jodhpur', cities: [{ id: 'jodhpur-city', name: 'Jodhpur City' }, { id: 'osian', name: 'Osian' }] },
          { id: 'udaipur', name: 'Udaipur', cities: [{ id: 'udaipur-city', name: 'Udaipur City' }, { id: 'rajsamand', name: 'Rajsamand' }] },
          { id: 'kota', name: 'Kota', cities: [{ id: 'kota-city', name: 'Kota' }] },
          { id: 'bikaner', name: 'Bikaner', cities: [{ id: 'bikaner-city', name: 'Bikaner' }] },
          { id: 'ajmer', name: 'Ajmer', cities: [{ id: 'ajmer-city', name: 'Ajmer' }] },
        ],
      },
      {
        id: 'sikkim',
        name: 'Sikkim',
        districts: [
          { id: 'gangtok', name: 'Gangtok', cities: [{ id: 'gangtok-city', name: 'Gangtok' }] },
        ],
      },
      {
        id: 'tamil-nadu',
        name: 'Tamil Nadu',
        districts: [
          { id: 'chennai', name: 'Chennai', cities: [{ id: 'chennai-city', name: 'Chennai City' }, { id: 'tambaram', name: 'Tambaram' }, { id: 'anna-nagar', name: 'Anna Nagar' }] },
          { id: 'coimbatore', name: 'Coimbatore', cities: [{ id: 'coimbatore-city', name: 'Coimbatore City' }, { id: 'tiruppur', name: 'Tiruppur' }] },
          { id: 'madurai', name: 'Madurai', cities: [{ id: 'madurai-city', name: 'Madurai' }] },
          { id: 'trichy', name: 'Trichy', cities: [{ id: 'trichy-city', name: 'Trichy' }] },
          { id: 'salem', name: 'Salem', cities: [{ id: 'salem-city', name: 'Salem' }] },
        ],
      },
      {
        id: 'telangana',
        name: 'Telangana',
        districts: [
          { id: 'hyderabad', name: 'Hyderabad', cities: [{ id: 'hyderabad-city', name: 'Hyderabad' }, { id: 'secunderabad', name: 'Secunderabad' }, { id: 'hitech-city', name: 'Hitech City' }] },
          { id: 'warangal', name: 'Warangal', cities: [{ id: 'warangal-city', name: 'Warangal' }] },
          { id: 'nizamabad', name: 'Nizamabad', cities: [{ id: 'nizamabad-city', name: 'Nizamabad' }] },
        ],
      },
      {
        id: 'tripura',
        name: 'Tripura',
        districts: [
          { id: 'agartala', name: 'Agartala', cities: [{ id: 'agartala-city', name: 'Agartala' }] },
        ],
      },
      {
        id: 'uttar-pradesh',
        name: 'Uttar Pradesh',
        districts: [
          { id: 'lucknow', name: 'Lucknow', cities: [{ id: 'lucknow-city', name: 'Lucknow City' }, { id: 'gomti-nagar', name: 'Gomti Nagar' }, { id: 'hazratganj', name: 'Hazratganj' }] },
          { id: 'kanpur', name: 'Kanpur', cities: [{ id: 'kanpur-city', name: 'Kanpur City' }, { id: 'unnao', name: 'Unnao' }] },
          { id: 'agra', name: 'Agra', cities: [{ id: 'agra-city', name: 'Agra City' }, { id: 'fatehabad', name: 'Fatehabad' }] },
          { id: 'varanasi', name: 'Varanasi', cities: [{ id: 'varanasi-city', name: 'Varanasi' }] },
          { id: 'allahabad', name: 'Allahabad', cities: [{ id: 'allahabad-city', name: 'Allahabad' }] },
          { id: 'noida', name: 'Noida', cities: [{ id: 'noida-city', name: 'Noida' }, { id: 'greater-noida', name: 'Greater Noida' }] },
          { id: 'ghaziabad', name: 'Ghaziabad', cities: [{ id: 'ghaziabad-city', name: 'Ghaziabad' }] },
        ],
      },
      {
        id: 'uttarakhand',
        name: 'Uttarakhand',
        districts: [
          { id: 'dehradun', name: 'Dehradun', cities: [{ id: 'dehradun-city', name: 'Dehradun' }] },
          { id: 'haridwar', name: 'Haridwar', cities: [{ id: 'haridwar-city', name: 'Haridwar' }] },
          { id: 'rishikesh', name: 'Rishikesh', cities: [{ id: 'rishikesh-city', name: 'Rishikesh' }] },
        ],
      },
      {
        id: 'west-bengal',
        name: 'West Bengal',
        districts: [
          { id: 'kolkata', name: 'Kolkata', cities: [{ id: 'kolkata-city', name: 'Kolkata City' }, { id: 'salt-lake', name: 'Salt Lake' }, { id: 'howrah', name: 'Howrah' }] },
          { id: 'howrah', name: 'Howrah', cities: [{ id: 'howrah-city', name: 'Howrah City' }, { id: 'ulubaria', name: 'Ulubaria' }] },
          { id: 'durgapur', name: 'Durgapur', cities: [{ id: 'durgapur-city', name: 'Durgapur' }] },
          { id: 'asansol', name: 'Asansol', cities: [{ id: 'asansol-city', name: 'Asansol' }] },
        ],
      },
      // Union Territories
      {
        id: 'andaman-nicobar',
        name: 'Andaman and Nicobar Islands',
        districts: [
          { id: 'port-blair', name: 'Port Blair', cities: [{ id: 'port-blair-city', name: 'Port Blair' }] },
        ],
      },
      {
        id: 'chandigarh',
        name: 'Chandigarh',
        districts: [
          { id: 'chandigarh', name: 'Chandigarh', cities: [{ id: 'chandigarh-city', name: 'Chandigarh City' }, { id: 'panchkula', name: 'Panchkula' }, { id: 'mohali', name: 'Mohali' }] },
        ],
      },
      {
        id: 'dadra-nagar-haveli',
        name: 'Dadra and Nagar Haveli',
        districts: [
          { id: 'silvassa', name: 'Silvassa', cities: [{ id: 'silvassa-city', name: 'Silvassa' }] },
        ],
      },
      {
        id: 'daman-diu',
        name: 'Daman and Diu',
        districts: [
          { id: 'daman', name: 'Daman', cities: [{ id: 'daman-city', name: 'Daman' }] },
        ],
      },
      {
        id: 'delhi',
        name: 'Delhi',
        districts: [
          { id: 'new-delhi', name: 'New Delhi', cities: [{ id: 'connaught-place', name: 'Connaught Place' }, { id: 'karol-bagh', name: 'Karol Bagh' }, { id: 'rajendra-place', name: 'Rajendra Place' }] },
          { id: 'north-delhi', name: 'North Delhi', cities: [{ id: 'rohini', name: 'Rohini' }, { id: 'pitampura', name: 'Pitampura' }] },
          { id: 'south-delhi', name: 'South Delhi', cities: [{ id: 'saket', name: 'Saket' }, { id: 'vasant-kunj', name: 'Vasant Kunj' }] },
          { id: 'east-delhi', name: 'East Delhi', cities: [{ id: 'preet-vihar', name: 'Preet Vihar' }, { id: 'mayur-vihar', name: 'Mayur Vihar' }] },
          { id: 'west-delhi', name: 'West Delhi', cities: [{ id: 'dwarka', name: 'Dwarka' }, { id: 'janakpuri', name: 'Janakpuri' }] },
        ],
      },
      {
        id: 'jammu-kashmir',
        name: 'Jammu and Kashmir',
        districts: [
          { id: 'srinagar', name: 'Srinagar', cities: [{ id: 'srinagar-city', name: 'Srinagar' }] },
          { id: 'jammu', name: 'Jammu', cities: [{ id: 'jammu-city', name: 'Jammu' }] },
        ],
      },
      {
        id: 'ladakh',
        name: 'Ladakh',
        districts: [
          { id: 'leh', name: 'Leh', cities: [{ id: 'leh-city', name: 'Leh' }] },
          { id: 'kargil', name: 'Kargil', cities: [{ id: 'kargil-city', name: 'Kargil' }] },
        ],
      },
      {
        id: 'lakshadweep',
        name: 'Lakshadweep',
        districts: [
          { id: 'kavaratti', name: 'Kavaratti', cities: [{ id: 'kavaratti-city', name: 'Kavaratti' }] },
        ],
      },
      {
        id: 'puducherry',
        name: 'Puducherry',
        districts: [
          { id: 'puducherry', name: 'Puducherry', cities: [{ id: 'puducherry-city', name: 'Puducherry' }] },
        ],
      },
    ],
  },
  // All other countries - comprehensive list
  { id: 'afghanistan', name: 'Afghanistan', states: [] },
  { id: 'albania', name: 'Albania', states: [] },
  { id: 'algeria', name: 'Algeria', states: [] },
  { id: 'argentina', name: 'Argentina', states: [] },
  { id: 'australia', name: 'Australia', states: [
    { id: 'new-south-wales', name: 'New South Wales', districts: [{ id: 'sydney', name: 'Sydney', cities: [{ id: 'sydney-city', name: 'Sydney' }, { id: 'parramatta', name: 'Parramatta' }] }] },
    { id: 'victoria', name: 'Victoria', districts: [{ id: 'melbourne', name: 'Melbourne', cities: [{ id: 'melbourne-city', name: 'Melbourne' }, { id: 'st-kilda', name: 'St Kilda' }] }] },
    { id: 'queensland', name: 'Queensland', districts: [{ id: 'brisbane', name: 'Brisbane', cities: [{ id: 'brisbane-city', name: 'Brisbane' }] }] },
  ] },
  { id: 'austria', name: 'Austria', states: [] },
  { id: 'bangladesh', name: 'Bangladesh', states: [] },
  { id: 'belgium', name: 'Belgium', states: [] },
  { id: 'brazil', name: 'Brazil', states: [] },
  { id: 'canada', name: 'Canada', states: [
    { id: 'ontario', name: 'Ontario', districts: [{ id: 'toronto', name: 'Toronto', cities: [{ id: 'toronto-city', name: 'Toronto' }, { id: 'mississauga', name: 'Mississauga' }] }, { id: 'ottawa', name: 'Ottawa', cities: [{ id: 'ottawa-city', name: 'Ottawa' }, { id: 'kanata', name: 'Kanata' }] }] },
    { id: 'british-columbia', name: 'British Columbia', districts: [{ id: 'vancouver', name: 'Vancouver', cities: [{ id: 'vancouver-city', name: 'Vancouver' }, { id: 'burnaby', name: 'Burnaby' }] }] },
    { id: 'quebec', name: 'Quebec', districts: [{ id: 'montreal', name: 'Montreal', cities: [{ id: 'montreal-city', name: 'Montreal' }] }] },
  ] },
  { id: 'china', name: 'China', states: [] },
  { id: 'denmark', name: 'Denmark', states: [] },
  { id: 'egypt', name: 'Egypt', states: [] },
  { id: 'france', name: 'France', states: [] },
  { id: 'germany', name: 'Germany', states: [] },
  { id: 'greece', name: 'Greece', states: [] },
  { id: 'hong-kong', name: 'Hong Kong', states: [] },
  { id: 'indonesia', name: 'Indonesia', states: [] },
  { id: 'iran', name: 'Iran', states: [] },
  { id: 'iraq', name: 'Iraq', states: [] },
  { id: 'ireland', name: 'Ireland', states: [] },
  { id: 'israel', name: 'Israel', states: [] },
  { id: 'italy', name: 'Italy', states: [] },
  { id: 'japan', name: 'Japan', states: [] },
  { id: 'kenya', name: 'Kenya', states: [] },
  { id: 'malaysia', name: 'Malaysia', states: [] },
  { id: 'mexico', name: 'Mexico', states: [] },
  { id: 'nepal', name: 'Nepal', states: [] },
  { id: 'netherlands', name: 'Netherlands', states: [] },
  { id: 'new-zealand', name: 'New Zealand', states: [] },
  { id: 'nigeria', name: 'Nigeria', states: [] },
  { id: 'norway', name: 'Norway', states: [] },
  { id: 'pakistan', name: 'Pakistan', states: [] },
  { id: 'philippines', name: 'Philippines', states: [] },
  { id: 'poland', name: 'Poland', states: [] },
  { id: 'portugal', name: 'Portugal', states: [] },
  { id: 'russia', name: 'Russia', states: [] },
  { id: 'saudi-arabia', name: 'Saudi Arabia', states: [] },
  { id: 'singapore', name: 'Singapore', states: [] },
  { id: 'south-africa', name: 'South Africa', states: [] },
  { id: 'south-korea', name: 'South Korea', states: [] },
  { id: 'spain', name: 'Spain', states: [] },
  { id: 'sri-lanka', name: 'Sri Lanka', states: [] },
  { id: 'sweden', name: 'Sweden', states: [] },
  { id: 'switzerland', name: 'Switzerland', states: [] },
  { id: 'thailand', name: 'Thailand', states: [] },
  { id: 'turkey', name: 'Turkey', states: [] },
  { id: 'uae', name: 'United Arab Emirates', states: [] },
  { id: 'uk', name: 'United Kingdom', states: [
    { id: 'england', name: 'England', districts: [{ id: 'london', name: 'Greater London', cities: [{ id: 'london-city', name: 'London' }, { id: 'westminster', name: 'Westminster' }, { id: 'camden', name: 'Camden' }] }, { id: 'manchester', name: 'Greater Manchester', cities: [{ id: 'manchester-city', name: 'Manchester' }, { id: 'salford', name: 'Salford' }] }] },
    { id: 'scotland', name: 'Scotland', districts: [{ id: 'edinburgh', name: 'Edinburgh', cities: [{ id: 'edinburgh-city', name: 'Edinburgh' }, { id: 'leith', name: 'Leith' }] }, { id: 'glasgow', name: 'Glasgow', cities: [{ id: 'glasgow-city', name: 'Glasgow' }, { id: 'east-end', name: 'East End' }] }] },
    { id: 'wales', name: 'Wales', districts: [{ id: 'cardiff', name: 'Cardiff', cities: [{ id: 'cardiff-city', name: 'Cardiff' }] }] },
  ] },
  { id: 'usa', name: 'United States', states: [
    { id: 'california', name: 'California', districts: [{ id: 'los-angeles', name: 'Los Angeles County', cities: [{ id: 'los-angeles-city', name: 'Los Angeles' }, { id: 'beverly-hills', name: 'Beverly Hills' }, { id: 'santa-monica', name: 'Santa Monica' }] }, { id: 'san-francisco', name: 'San Francisco County', cities: [{ id: 'san-francisco-city', name: 'San Francisco' }, { id: 'oakland', name: 'Oakland' }] }] },
    { id: 'new-york', name: 'New York', districts: [{ id: 'manhattan', name: 'Manhattan', cities: [{ id: 'manhattan-city', name: 'Manhattan' }, { id: 'brooklyn', name: 'Brooklyn' }] }, { id: 'queens', name: 'Queens', cities: [{ id: 'queens-city', name: 'Queens' }, { id: 'flushing', name: 'Flushing' }] }] },
    { id: 'texas', name: 'Texas', districts: [{ id: 'houston', name: 'Harris County', cities: [{ id: 'houston-city', name: 'Houston' }, { id: 'sugar-land', name: 'Sugar Land' }] }, { id: 'dallas', name: 'Dallas County', cities: [{ id: 'dallas-city', name: 'Dallas' }, { id: 'plano', name: 'Plano' }] }] },
    { id: 'florida', name: 'Florida', districts: [{ id: 'miami', name: 'Miami-Dade', cities: [{ id: 'miami-city', name: 'Miami' }] }] },
    { id: 'illinois', name: 'Illinois', districts: [{ id: 'chicago', name: 'Cook County', cities: [{ id: 'chicago-city', name: 'Chicago' }] }] },
  ] },
  { id: 'vietnam', name: 'Vietnam', states: [] },
  { id: 'zimbabwe', name: 'Zimbabwe', states: [] },
];

// Helper functions to get data
export const getCountries = (): Country[] => {
  return locationData;
};

export const getStatesByCountry = (countryId: string): State[] => {
  const country = locationData.find((c) => c.id === countryId);
  return country ? country.states : [];
};

export const getDistrictsByState = (countryId: string, stateId: string): District[] => {
  const country = locationData.find((c) => c.id === countryId);
  if (!country) return [];
  
  const state = country.states.find((s) => s.id === stateId);
  return state ? state.districts : [];
};

export const getCitiesByDistrict = (countryId: string, stateId: string, districtId: string): City[] => {
  const country = locationData.find((c) => c.id === countryId);
  if (!country) return [];
  
  const state = country.states.find((s) => s.id === stateId);
  if (!state) return [];
  
  const district = state.districts.find((d) => d.id === districtId);
  return district ? district.cities : [];
};
