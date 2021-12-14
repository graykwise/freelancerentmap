const rentData = `[
 {
   "Neighborhood": "Allerton",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Alphabet City",
   "Rent": "3,095"
 },
 {
   "Neighborhood": "Annadale",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Astoria",
   "Rent": "2,658"
 },
 {
   "Neighborhood": "Auburndale",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Bath Beach",
   "Rent": "1,400"
 },
 {
   "Neighborhood": "Battery Park City",
   "Rent": "4,000"
 },
 {
   "Neighborhood": "Bay Ridge",
   "Rent": "1,750"
 },
 {
   "Neighborhood": "Bayside",
   "Rent": "2,050"
 },
 {
   "Neighborhood": "Bedford Park",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Bedford-Stuyvesant",
   "Rent": "2,300"
 },
 {
   "Neighborhood": "Bellerose",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Belmont",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Bensonhurst",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Bergen Beach",
   "Rent": "1,672"
 },
 {
   "Neighborhood": "Blissville",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Boerum Hill",
   "Rent": "3,498"
 },
 {
   "Neighborhood": "Borough Park",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Briarwood",
   "Rent": "1,725"
 },
 {
   "Neighborhood": "Brighton Beach",
   "Rent": "2,000"
 },
 {
   "Neighborhood": "Bronx Park",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Brooklyn",
   "Rent": "3,216"
 },
 {
   "Neighborhood": "Brooklyn Heights",
   "Rent": "3,774"
 },
 {
   "Neighborhood": "Brooklyn Navy Yard",
   "Rent": "3,395"
 },
 {
   "Neighborhood": "Brownsville",
   "Rent": "1,421"
 },
 {
   "Neighborhood": "Bulls Head",
   "Rent": "1,100"
 },
 {
   "Neighborhood": "Bushwick",
   "Rent": "2,663"
 },
 {
   "Neighborhood": "Canarsie",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Carroll Gardens",
   "Rent": "2,450"
 },
 {
   "Neighborhood": "Central Brooklyn",
   "Rent": "2,131"
 },
 {
   "Neighborhood": "Chelsea",
   "Rent": "3,688"
 },
 {
   "Neighborhood": "Chinatown",
   "Rent": "3,300"
 },
 {
   "Neighborhood": "City Island",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Civic Center",
   "Rent": "3,695"
 },
 {
   "Neighborhood": "Clason Point",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Clearview",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Clinton Hill",
   "Rent": "2,600"
 },
 {
   "Neighborhood": "Cobble Hill",
   "Rent": "2,800"
 },
 {
   "Neighborhood": "College Point",
   "Rent": "2,000"
 },
 {
   "Neighborhood": "Columbia St",
   "Rent": "2,697"
 },
 {
   "Neighborhood": "Concord",
   "Rent": "1,300"
 },
 {
   "Neighborhood": "Concourse",
   "Rent": "1,612"
 },
 {
   "Neighborhood": "Concourse Village",
   "Rent": "1,850"
 },
 {
   "Neighborhood": "Coney Island",
   "Rent": "2,150"
 },
 {
   "Neighborhood": "Corona",
   "Rent": "1,850"
 },
 {
   "Neighborhood": "Country Club",
   "Rent": "1,750"
 },
 {
   "Neighborhood": "Crown Heights",
   "Rent": "2,000"
 },
 {
   "Neighborhood": "Cypress Hills",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Dongan Hills",
   "Rent": "1,300"
 },
 {
   "Neighborhood": "Douglaston",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Downtown Brooklyn",
   "Rent": "3,700"
 },
 {
   "Neighborhood": "Downtown Manhattan",
   "Rent": "3,450"
 },
 {
   "Neighborhood": "DUMBO",
   "Rent": "4,495"
 },
 {
   "Neighborhood": "Dyker Heights",
   "Rent": "1,550"
 },
 {
   "Neighborhood": "East Elmhurst",
   "Rent": "1,850"
 },
 {
   "Neighborhood": "East Flatbush",
   "Rent": "1,643"
 },
 {
   "Neighborhood": "East Harlem",
   "Rent": "2,473"
 },
 {
   "Neighborhood": "East New York",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "East Village",
   "Rent": "2,995"
 },
 {
   "Neighborhood": "Elmhurst",
   "Rent": "2,000"
 },
 {
   "Neighborhood": "Eltingville",
   "Rent": "1,400"
 },
 {
   "Neighborhood": "Far Rockaway",
   "Rent": "1,737"
 },
 {
   "Neighborhood": "Financial District",
   "Rent": "3,500"
 },
 {
   "Neighborhood": "Flatbush",
   "Rent": "2,071"
 },
 {
   "Neighborhood": "Flatiron District",
   "Rent": "4,500"
 },
 {
   "Neighborhood": "Flatlands",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Floral Park",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Flushing",
   "Rent": "1,732"
 },
 {
   "Neighborhood": "Flushing Meadows-Corona Park",
   "Rent": "1,975"
 },
 {
   "Neighborhood": "Fordham Heights",
   "Rent": "1,625"
 },
 {
   "Neighborhood": "Fordham Manor",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Forest Hills",
   "Rent": "1,875"
 },
 {
   "Neighborhood": "Forest Park",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Fort George",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Fort Greene",
   "Rent": "3,365"
 },
 {
   "Neighborhood": "Fort Wadsworth",
   "Rent": "3,350"
 },
 {
   "Neighborhood": "Foxhurst",
   "Rent": "1,550"
 },
 {
   "Neighborhood": "Fresh Meadows",
   "Rent": "1,750"
 },
 {
   "Neighborhood": "Garment District",
   "Rent": "3,450"
 },
 {
   "Neighborhood": "Glen Oaks",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Glendale",
   "Rent": "1,750"
 },
 {
   "Neighborhood": "Gowanus",
   "Rent": "2,700"
 },
 {
   "Neighborhood": "Gramercy",
   "Rent": "4,423"
 },
 {
   "Neighborhood": "Gramercy Park",
   "Rent": "3,495"
 },
 {
   "Neighborhood": "Gravesend",
   "Rent": "1,550"
 },
 {
   "Neighborhood": "Great Kills",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Greenpoint",
   "Rent": "4,300"
 },
 {
   "Neighborhood": "Greenwich Village",
   "Rent": "3,290"
 },
 {
   "Neighborhood": "Greenwood Heights",
   "Rent": "2,489"
 },
 {
   "Neighborhood": "Grymes Hill",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Hamilton Heights",
   "Rent": "1,995"
 },
 {
   "Neighborhood": "Harlem",
   "Rent": "2,100"
 },
 {
   "Neighborhood": "Hell's Kitchen",
   "Rent": "3,275"
 },
 {
   "Neighborhood": "Highbridge",
   "Rent": "1,904"
 },
 {
   "Neighborhood": "Hillcrest",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Hollis",
   "Rent": "1,485"
 },
 {
   "Neighborhood": "Holliswood",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Howard Beach",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Hudson Heights",
   "Rent": "1,950"
 },
 {
   "Neighborhood": "Huguenot",
   "Rent": "1,350"
 },
 {
   "Neighborhood": "Hunters Point",
   "Rent": "2,999"
 },
 {
   "Neighborhood": "Hunts Point",
   "Rent": "1,350"
 },
 {
   "Neighborhood": "Inwood",
   "Rent": "1,750"
 },
 {
   "Neighborhood": "Jackson Heights",
   "Rent": "1,825"
 },
 {
   "Neighborhood": "Jamaica",
   "Rent": "2,000"
 },
 {
   "Neighborhood": "Jamaica Estates",
   "Rent": "1,636"
 },
 {
   "Neighborhood": "Jamaica Hills",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Kensington",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Kew Gardens",
   "Rent": "1,788"
 },
 {
   "Neighborhood": "Kew Gardens Hills",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Kingsbridge",
   "Rent": "1,750"
 },
 {
   "Neighborhood": "Kips Bay",
   "Rent": "3,200"
 },
 {
   "Neighborhood": "Laurelton",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Lincoln Square",
   "Rent": "4,000"
 },
 {
   "Neighborhood": "Little Italy",
   "Rent": "2,700"
 },
 {
   "Neighborhood": "Little Neck",
   "Rent": "1,875"
 },
 {
   "Neighborhood": "Long Island City",
   "Rent": "2,850"
 },
 {
   "Neighborhood": "Lower East Side",
   "Rent": "3,269"
 },
 {
   "Neighborhood": "Manhattan",
   "Rent": "3,200"
 },
 {
   "Neighborhood": "Manhattan Beach",
   "Rent": "1,775"
 },
 {
   "Neighborhood": "Manhattan Valley",
   "Rent": "3,200"
 },
 {
   "Neighborhood": "Manor Heights",
   "Rent": "1,200"
 },
 {
   "Neighborhood": "Mapleton",
   "Rent": "1,590"
 },
 {
   "Neighborhood": "Marine Park",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Maspeth",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Melrose",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Middle Village",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Midtown",
   "Rent": "3,800"
 },
 {
   "Neighborhood": "Midtown East",
   "Rent": "3,223"
 },
 {
   "Neighborhood": "Midtown Manhattan",
   "Rent": "3,300"
 },
 {
   "Neighborhood": "Midwood",
   "Rent": "1,975"
 },
 {
   "Neighborhood": "Morningside Heights",
   "Rent": "2,500"
 },
 {
   "Neighborhood": "Morris Heights",
   "Rent": "1,649"
 },
 {
   "Neighborhood": "Morris Park",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Mott Haven",
   "Rent": "2,200"
 },
 {
   "Neighborhood": "Mount Eden",
   "Rent": "1,695"
 },
 {
   "Neighborhood": "Murray Hill",
   "Rent": "3,200"
 },
 {
   "Neighborhood": "Navy Yard",
   "Rent": "3,395"
 },
 {
   "Neighborhood": "New Dorp",
   "Rent": "1,550"
 },
 {
   "Neighborhood": "New Springville",
   "Rent": "1,400"
 },
 {
   "Neighborhood": "NoHo",
   "Rent": "3,600"
 },
 {
   "Neighborhood": "Nolita",
   "Rent": "3,595"
 },
 {
   "Neighborhood": "NoMad",
   "Rent": "3,845"
 },
 {
   "Neighborhood": "Northeastern Queens",
   "Rent": "1,975"
 },
 {
   "Neighborhood": "Northern Brooklyn",
   "Rent": "3,204"
 },
 {
   "Neighborhood": "Northwestern Brooklyn",
   "Rent": "3,367"
 },
 {
   "Neighborhood": "Northwestern Queens",
   "Rent": "2,650"
 },
 {
   "Neighborhood": "Norwood",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "Oakwood",
   "Rent": "1,395"
 },
 {
   "Neighborhood": "Ocean Hill",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Ozone Park",
   "Rent": "1,575"
 },
 {
   "Neighborhood": "Park Slope",
   "Rent": "2,500"
 },
 {
   "Neighborhood": "Parkchester",
   "Rent": "1,550"
 },
 {
   "Neighborhood": "Pelham Bay",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Pelham Gardens",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Pelham Parkway",
   "Rent": "1,850"
 },
 {
   "Neighborhood": "Pomonok",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Prince's Bay",
   "Rent": "1,400"
 },
 {
   "Neighborhood": "Prospect Heights",
   "Rent": "3,300"
 },
 {
   "Neighborhood": "Prospect Lefferts Gardens",
   "Rent": "2,700"
 },
 {
   "Neighborhood": "Prospect Park",
   "Rent": "2,300"
 },
 {
   "Neighborhood": "Queens",
   "Rent": "2,400"
 },
 {
   "Neighborhood": "Queens Village",
   "Rent": "1,788"
 },
 {
   "Neighborhood": "Red Hook",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Rego Park",
   "Rent": "2,745"
 },
 {
   "Neighborhood": "Richmond Hill",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Ridgewood",
   "Rent": "2,000"
 },
 {
   "Neighborhood": "Riverdale",
   "Rent": "1,950"
 },
 {
   "Neighborhood": "Rockaway Beach",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Roosevelt Island",
   "Rent": "3,675"
 },
 {
   "Neighborhood": "Rose Hill",
   "Rent": "3,200"
 },
 {
   "Neighborhood": "Rosebank",
   "Rent": "1,550"
 },
 {
   "Neighborhood": "Rosedale",
   "Rent": "2,325"
 },
 {
   "Neighborhood": "Rossville",
   "Rent": "1,400"
 },
 {
   "Neighborhood": "Sea Gate",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "Sheepshead Bay",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Silver Lake",
   "Rent": "1,695"
 },
 {
   "Neighborhood": "SoHo",
   "Rent": "4,200"
 },
 {
   "Neighborhood": "South Ozone Park",
   "Rent": "1,650"
 },
 {
   "Neighborhood": "South Slope",
   "Rent": "2,750"
 },
 {
   "Neighborhood": "Southwestern Brooklyn",
   "Rent": "1,799"
 },
 {
   "Neighborhood": "Springfield Gardens",
   "Rent": "2,050"
 },
 {
   "Neighborhood": "St. Albans",
   "Rent": "1,300"
 },
 {
   "Neighborhood": "St. George",
   "Rent": "2,500"
 },
 {
   "Neighborhood": "Stapleton",
   "Rent": "1,945"
 },
 {
   "Neighborhood": "Stuyvesant Town",
   "Rent": "4,113"
 },
 {
   "Neighborhood": "Sunnyside",
   "Rent": "2,038"
 },
 {
   "Neighborhood": "Sunset Park",
   "Rent": "1,625"
 },
 {
   "Neighborhood": "Sutton Place",
   "Rent": "3,495"
 },
 {
   "Neighborhood": "Theater District",
   "Rent": "3,500"
 },
 {
   "Neighborhood": "Throgs Neck",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Tompkinsville",
   "Rent": "3,050"
 },
 {
   "Neighborhood": "Tottenville",
   "Rent": "1,473"
 },
 {
   "Neighborhood": "Tribeca",
   "Rent": "3,999"
 },
 {
   "Neighborhood": "Turtle Bay",
   "Rent": "3,168"
 },
 {
   "Neighborhood": "Two Bridges",
   "Rent": "2,800"
 },
 {
   "Neighborhood": "Unionport",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "University Heights",
   "Rent": "1,604"
 },
 {
   "Neighborhood": "Upper East Side",
   "Rent": "2,800"
 },
 {
   "Neighborhood": "Upper Manhattan",
   "Rent": "2,950"
 },
 {
   "Neighborhood": "Upper West Side",
   "Rent": "3,500"
 },
 {
   "Neighborhood": "Van Cortlandt Park",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Van Nest",
   "Rent": "1,875"
 },
 {
   "Neighborhood": "Vinegar Hill",
   "Rent": "2,400"
 },
 {
   "Neighborhood": "Wakefield",
   "Rent": "1,400"
 },
 {
   "Neighborhood": "Washington Heights",
   "Rent": "1,825"
 },
 {
   "Neighborhood": "West Brighton",
   "Rent": "2,400"
 },
 {
   "Neighborhood": "West Farms",
   "Rent": "1,600"
 },
 {
   "Neighborhood": "West Village",
   "Rent": "3,600"
 },
 {
   "Neighborhood": "Westchester Village",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Westerleigh",
   "Rent": "1,250"
 },
 {
   "Neighborhood": "Whitestone",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Williamsbridge",
   "Rent": "1,848"
 },
 {
   "Neighborhood": "Williamsburg",
   "Rent": "3,640"
 },
 {
   "Neighborhood": "Willowbrook",
   "Rent": "1,200"
 },
 {
   "Neighborhood": "Windsor Terrace",
   "Rent": "2,450"
 },
 {
   "Neighborhood": "Woodhaven",
   "Rent": "1,800"
 },
 {
   "Neighborhood": "Woodlawn Heights",
   "Rent": "1,700"
 },
 {
   "Neighborhood": "Woodrow",
   "Rent": "1,500"
 },
 {
   "Neighborhood": "Woodside",
   "Rent": "2,700"
 },
 {
   "Neighborhood": "Yonkers",
   "Rent": "1,865"
 },
 {
   "Neighborhood": "Yorkville",
   "Rent": "2,800"
 }
]`;
