import React from 'react';

const stationOptions = [ 
    "Ambur  -> AB",
    "Abu Road  -> ABR",
    "Allahabad Chheoki  -> ACOI",
    "Adoni  -> AD",
    "Ahmedabad Jn  -> ADI",
    "Adityapur  -> ADTP",
    "Agra Fort  -> AF",
    "Agra Cantt  -> AGC",
    "Ajmer Jn  -> AII",
    "Akola Jn.  -> AK",
    "Ankleshwar Jn  -> AKV",
    "Aligarh Jn  -> ALJN",
    "Amravati  -> AMI",
    "Amroha  -> AMRO",
    "Ahmednagar  -> ANG",
    "Anand Jn  -> ANND",
    "Anand Vihar Termius  -> ANVT",
    "Alipur Duar Jn  -> APDJ",
    "Aishbagh  -> ASH",
    "Asansol Jn  -> ASN",
    "Amritsar  -> ASR",
    "Akbarpur  -> ABP",
	"Anantapur  -> ATP",
	"Aurangabad  -> AWB",
	"Alwar  -> AWR",
	"Aluva  -> AWY",
	"Ayodhya  -> AY",
	"Berhampur  -> BAM",
	"Belapur  -> BAP",
	"Barh  -> BARH",
	"Batala Jn  -> BAT",
	"Burhanpur  -> BAU",
	"Barabanki Jn  -> BBK",
	"Bhubaneswar  -> BBS",
	"Badnera Jn.  -> BD",
	"Bandra Terminus  -> BDTS",
	"Bareilly(nr)  -> BE",
	"Beawar  -> BER",
	"Belgaum  -> BGM",
	"Bhagalpur  -> BGP",
	"Begu Sarai  -> BGS",
	"Bahadurgarh  -> BGZ",
	"Bharuch Jn  -> BH",
	"Bhadrakh  -> BHC",
	"Bhilwara  -> BHL",
	"Bolpur S Niktn  -> BHP",
	"Vidisha  -> BHS",
	"Bina Jn  -> BINA",
	"Barauni Junction  -> BJU",
	"Bikaner Jn  -> BKN",
	"Bokaro Steel City  -> BKSC",
	"Valsad  -> BL",
	"Balasore  -> BLS",
	"Bapudham Motihari  -> BMKI",
	"Begampet  -> BMT",
	"Bangalore Cant  -> BNC",
	"Bhiwani Jn.  -> BNW",
	"Badshahnagar  -> BNZ",
	"Bhadohi  -> BOY",
	"Badarpur Jn.  -> BPB",
	"Bhopal  -> BPL",
	"Balharshah  -> BPQ",
	"Vadodara Jn  -> BRC",
	"Barkakana  -> BRKA",
	"Varanasi  -> BSB",
	"Bhusaval Jn  -> BSL",
	"Bilaspur  -> BSP",
	"Vasai Road  -> BSR",
	"Basti  -> BST",
	"Bettiah  -> BTH",
	"Bhatinda  -> BTI",
	"Ballia  -> BUI",
	"Bhavnagar Trmus  -> BVC",
	"Borivali  -> BVI",
	"Bardhaman  -> BWN",
	"Bangarapet  -> BWT",
	"Buxar  -> BXR",
	"Vijayawada Jn  -> BZA",
	"Betul  -> BZU",
	"Coimbatore Jn  -> CBE",
	"Chandrapur  -> CD",
	"Chandigarh  -> CDG",
	"Chidambaram  -> CDM",
	"Chengalpattu  -> CGL",
	"Chiplun  -> CHI",
	"Chitrakot  -> CKTD",
	"Calicut  -> CLT",
	"Chirala  -> CLX",
	"Kanpur Central  -> CNB",
	"Cooch Behar  -> COB",
	"Chittaurgarh Jn.  -> COR",
	"Chhapra  -> CPR",
	"Chopan  -> CPU",
	"Chandrapura  -> CRP",
	"Chhatrapati Shivaji Maharaj Terminus  -> CSMT",
	"Cuttack  -> CTC",
	"Chittor  -> CTO",
	"Churu  -> CUR",
	"Dabra  -> DBA",
	"Darbhanga Jn  -> DBG",
	"Dibrugarh  -> DBRG",
	"Dibrugarh Town  -> DBRT",
	"Daund Jn  -> DD",
	"Pt.deen Dayal Upadhyaya Jn.  -> DDU",
	"Delhi Cantt  -> DEC",
	"Delhi Sarai Rohilla  -> DEE",
	"Digha  -> DGHA",
	"Durgapur  -> DGR",
	"Dahod  -> DHD",
	"Dhanbad Jn  -> DHN",
	"Dronachellam Jn  -> DHNE",
	"Delhi Jn.  -> DLI",
	"Damoh  -> DMO",
	"Dharmanagar  -> DMR",
	"Dimapur  -> DMV",
	"Danapur  -> DNR",
	"Dausa  -> DO",
	"Delhi Shahdara  -> DSA",
	"Daltonganj  -> DTO",
	"Durg  -> DURG",
	"Duvvada  -> DVD",
	"Davangere  -> DVG",
	"Devlali  -> DVL",
	"Erode Jn  -> ED",
	"Eluru  -> EE",
	"Ernakulam Town  -> ERN",
	"Ernakulam Jn  -> ERS",
	"Itarsi Jn  -> ET",
	"Etawah  -> ETW",
	"Faizabad Jn  -> FD",
	"Faridabad  -> FDB",
	"Faridkot  -> FDK",
	"Phulera Jn  -> FL",
	"Firozpur Cant  -> FZR",
	"Gondia  -> G",
	"Gaya Jn  -> GAYA",
	"Gonda Jn  -> GD",
	"Godhra Jn  -> GDA",
	"Gudur Jn  -> GDR",
	"Gangapur City  -> GGC",
	"Gurgaon  -> GGN",
	"Guwahati  -> GHY",
	"Gandhidham Bg  -> GIMB",
	"Gorakhpur Jn  -> GKP",
	"Gomoh Jn  -> GMO",
	"Gauriganj  -> GNG",
	"Guntur Jn  -> GNT",
	"Gulbarga  -> GR",
	"Guntakal Jn  -> GTL",
	"Guna  -> GUNA",
	"Gwalior  -> GWL",
	"Gooty  -> GY",
	"Ghaziabad  -> GZB",
	"Hassan  -> HAS",
	"Rani Kamalapati  -> RKMP",
	"Harda  -> HD",
	"Hijilli  -> HIJ",
	"Hajipur Jn  -> HJP",
	"Hanumangarh Jn  -> HMH",
	"Hardoi  -> HRI",
	"Hisar  -> HSR",
	"Hosur  -> HSRA",
	"Hatia  -> HTE",
	"Haridwar  -> HW",
	"Howrah Jn  -> HWH",
	"Cuddapah  -> HX",
	"Hyderabad  -> HYB",
	"Igatpuri  -> IGP",
	"Indore Jn  -> INDB",
	"Jhajha  -> JAJ",
	"Jamnagar  -> JAM",
	"Jammutavi  -> JAT",
	"Jabalpur  -> JBP",
	"Virangana Lakshmibai Junction  -> VGLJ",
	"Jind Jn  -> JIND",
	"Jalgaon Jn  -> JL",
	"Jaunpur Jn  -> JNU",
	"Jaunpur City  -> JOP",
	"Jaipur Jn.  -> JP",
	"Jalandhar Cant  -> JRC",
	"Jharsuguda Jn  -> JSG",
	"Jasidih Jn  -> JSME",
	"Jolarpettai  -> JTJ",
	"Jorhat Town  -> JTTN",
	"Jodhpur Jn  -> JU",
	"Jalandhar City  -> JUC",
	"Jodhpur Cantt  -> JUCT",
	"Jorawarnagar Jn  -> JVN",
	"Kacheguda  -> KCG",
	"Kengeri  -> KGI",
	"Kathgodam  -> KGM",
	"Kharagpur Jn  -> KGP",
	"Katihar Jn  -> KIR",
	"Kiul Jn  -> KIUL",
	"Krishnarajapurm  -> KJM",
	"Kurukshetra Jn  -> KKDE",
	"Kaithal  -> KLE",
	"Kalka  -> KLK",
	"Khammam  -> KMT",
	"Kumbakonam  -> KMU",
	"Katni Murwara  -> KMZ",
	"Kishanganj  -> KNE",
	"Khandwa  -> KNW",
	"Kolkatta Terminal  -> KOAA",
	"Kolhapur  -> KOP",
	"Kota Jn  -> KOTA",
	"Katpadi Jn  -> KPD",
	"Kopargaon  -> KPG",
	"Kurnool City  -> KRNT",
	"Katni  -> KTE",
	"Katni South  -> KTES",
	"Kottayam  -> KTYM",
	"Karnal  -> KUN",
	"Khurda Road Jn  -> KUR",
	"Kurduvadi Jn.  -> KWV",
	"Kapurthala  -> KXH",
	"Kalyan Jn  -> KYN",
	"Kamakhya  -> KYQ",
	"Kazipet Jn  -> KZJ",
	"Lalitpur  -> LAR",
	"Lucknow City  -> LC",
	"Ludhiana Jn  -> LKU",
	"Lalgarh Jn  -> LGH",
	"Lucknow  -> LJN",
	"Lucknow  -> LKO",
	"Lalkua Jn.  -> LKU",
	"Lumding Jn  -> LMG",
	"Lonavala  -> LNL",
	"Lokmanyatilak  -> LTT" ,
	"Mangalore Junction  -> MAJN",
	"Malkheri  -> MAKR",
	"Maninagar  -> MAN",
	"Madgaon  -> MAO",
	"Mangalore Central  -> MAQ",
	"Chennai Central  -> MAS",
	"Mau Jn  -> MAU",
	"Moradabad  -> MB",
	"Mahbubnagar  -> MBNR",
	"Mancheral  -> MCI",
	"Madhupur Jn  -> MDP",
	"Madurai Jn  -> MDU",
	"Muzaffarpur Jn  -> MFP" ,
	"Marwar Jn  -> MJ",
	"Manikpur Jn  -> MKP",
	"Malda Town  -> MLDT",
	"Mumbai Central  -> MMCT",
	"Manmad Jn  -> MMR",
	"Moga  -> MOGA",
	"Muzaffarnagar  -> MOZ",
	"Miraj Jn.  -> MRJ",
	"Mathura Cant  -> MRT",
	"Chennai Egmore  -> MS",
	"Mahesana Jn  -> MSH",
	"Merta Road Jn  -> MTD",
	"Mathura Jn.  -> MTJ",
	"Mayiladuturai J  -> MV",
	"Mariani Jn  -> MXN",
	"Maihar  -> MYR",
	"Mysore Jn  -> MYS",
	"Mirzapur  -> MZP",
	"Nagda Jn  -> NAD",
	"New Amravati  -> NAVI",
	"New Bongaigaon  -> NBQ",
	"New Bhuj  -> NBVJ",
	"New Cooch Behar  -> NCB",
	"Nagarcoil Jn  -> NCJ",
	"Nadiad Jn  -> ND",
	"Nandurbar  -> NDB",
	"Nandyal  -> NDL",
	"New Delhi  -> NDLS",
	"Nanded  -> NED",
	"Nagaur  -> NGO",
	"Nagpur  -> NGP",
	"New Jalpaiguri  -> NJP",
	"Nasik Road  -> NK",
	"Nellore  -> NLR",
	"Nimach  -> NMH",
	"Naugachia  -> NNA",
	"New Alipurduar  -> NOQ",
	"New Tinsukia  -> NTSK",
	"Navsari  -> NVS",
	"Nizamabad  -> NZB",
	"Hazrat Nizamuddin Jn  -> NZM",
	"Ongole  -> OGL",
	"Orai  -> ORAI",
	"Perambur  -> PER",
	"Palghat  -> PGT",
	"Phagwara Jn  -> PGW",
	"Pakaur  -> PKR",
	"Patna Jn  -> PNBE",
	"Patna Saheb  -> PNC",
	"Parasnath  -> PNME",
	"Panipat Jn  -> PNP",
	"Palanpur Jn  -> PNU",
	"Panvel  -> PNVL",
	"Pipariya  -> PPI",
	"Patliputra  -> PPTA",
	"Purnia Jn  -> PRNA",
	"Pathankot  -> PTK",
	"Pathankot Cantt  -> PTKC",
	"Pune Jn  -> PUNE",
	"Puri  -> PURI",
	"Kollam Jn  -> QLN",
	"Raipur  -> R",
	"Rae Bareli Jn  -> RBL",
	"Raichur  -> RC",
	"Rewari Jn.  -> RE",
	"Rewa  -> REWA",
	"Rayagada  -> RGDA",
	"Raigarh  -> RIG",
	"Raj Nandgaon  -> RJN",
	"Rajendra Nagar  -> RJPB",
	"Rajendranagar  -> RJQ",
	"Rajkot  -> RJT",
	"Rajamundry  -> RJY",
	"Roorkee  -> RK",
	"Raja Ki Mandi  -> RKM",
	"Rampur  -> RMU",
	"Ratnagiri  -> RN",
	"Ranchi  -> RNC",
	"Rangiya Jn.  -> RNY",
	"Rohtak Jn  -> ROK",
	"Raurkela  -> ROU",
	"Rampur Hat  -> RPH",
	"Rajpura Jn  -> RPJ",
	"Ratlam Jn  -> RTM",
	"Renigunta Jn  -> RU",
	"Rudrapur City  -> RUPC",
	"Salem Jn  -> SA",
	"Sangrur  -> SAG",
	"Krantivira Sangolli Rayanna (bengaluru Station)  -> SBC",
	"Sambalpur  -> SBP",
	"Siswa Bazar  -> SBZ",
	"Secunderabad Jn  -> SC",
	"Silchar  -> SCL",
	"Sealdah  -> SDAH",
	"Shahdol  -> SDL",
	"Sonpur  -> SEE",
	"Sevagram  -> SEGM",
	"Shri Ganganagar  -> SGNR",
	"Saugor  -> SGO",
	"Siliguri Jn  -> SGUJ",
	"Shamgarh  -> SGZ",
	"Sant Hirdaram Nagar  -> SHRN",
	"Sirhind Jn  -> SIR",
	"Sangli  -> SLI",
	"Sultanpur  -> SLN",
	"Samalkot Jn  -> SLO",
	"Sonipat  -> SNP",
	"Suratgarh Jn  -> SOG",
	"Solan  -> SOL",
	"Samastipur Jn  -> SPJ",
	"Santragachi Jn  -> SRC",
	"Saharanpur Jn.  -> SRE",
	"Surendranagar G  -> SRGT",
	"Shoranur Jn  -> SRR",
	"Sirsa  -> SSA",
	"Surat  -> ST",
	"Satna  -> STA",
	"Surendranagar  -> SUNR",
	"Solapur Jn  -> SUR",
	"Shri Mata Vaishno Devi Katra  -> SVDK",
	"Sawai Madhopur  -> SWM",
	"Sawantwadi Road  -> SWV",
	"Shahjahanpur  -> SZP",
	"Tatanagar Jn  -> TATA",
	"Tambaram  -> TBM",
	"Thrisur  -> TCR",
	"Tadepalligudem  -> TDD",
	"Tundla Jn  -> TDL",
	"Tirunelveli  -> TEN",
	"Thivim  -> THVM",
	"Titlagarh  -> TIG",
	"Thanjavar  -> TJ",
	"Thane  -> TNA",
	"Tiruchchirappalli  -> TPJ",
	"Tirupati  -> TPTY",
	"Tiruppur  -> TUP",
	"Trivandrum Cntl  -> TVC",
	"Ambala City  -> UBC",
	"Hubli Jn  -> UBL",
	"Udaipur City  -> UDZ",
	"Ujjain Jn  -> UJN",
	"Ambala  -> UMB",
	"Umaria  -> UMR",
	"Usalapur  -> USL",
	"Vapi  -> VAPI",
	"Viramgam Jn  -> VG",
	"Villupuram Jn  -> VM",
	"Vaniyambadi  -> VN",
	"Virudunagar Jn  -> VPT",
	"Veraval  -> VRL",
	"Vasco Da Gama  -> VSG",
	"Visakhapatnam  -> VSKP",
	"Vizianagram Jn  -> VZM",
	"Wadi  -> WADI",
	"Warangal  -> WL",
	"Wardha Jn  -> WR",
	"Yamunanagar Jagadhri  -> YJUD",
	"Yelahanka Jn.  -> YNK",
	"Yasvantpur Jn  -> YPR",
	"Kalaburagi Junction  -> KLBG",
	"Prayagraj Junction  -> PRYJ",
	"Prayagraj Chheoki  -> PCOI",
	"Prayagraj Rambagh  -> PRRB",
	"Banaras  -> BSBS",
	"Ayodhya Cantt.  -> AYC",
	"Maa Belha Devi Dham Pratapgarh Junction  -> MBDP" 
];

const StationOptions = () => (
    <>
        {stationOptions.map(option => (
            <option key={option} value={option} />
        ))}
    </>
);

export default StationOptions;

