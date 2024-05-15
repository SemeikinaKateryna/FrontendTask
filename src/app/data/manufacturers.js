const manufacturers = [
    {
        id: 1,
        name: "FashionHub",
        start_cooperation_date: "2019-01-01",
        contact_number: "+1234567890",
        email: "info@fashionhub.com"
    },
    {
        id: 2,
        name: "StyleQueen",
        start_cooperation_date: "2024-05-01",
        contact_number: "+1234567891",
        email: "info@stylequeen.com"
    },
    {
        id: 3,
        name: "OutdoorGear",
        start_cooperation_date: "2019-11-20",
        contact_number: "+1234567893",
        email: "info@outdoorgear.com"
    },
    {
        id: 4,
        name: "FootwearWorld",
        start_cooperation_date: "2021-03-10",
        contact_number: "+1234567892",
        email: "info@footwearworld.com"
    },
    {
        id: 5,
        name: "ElegantFootwear",
        start_cooperation_date: "2017-08-30",
        contact_number: "+1234567894",
        email: "info@elegantfootwear.com"
    },
    {
        id: 6,
        name: "TrendyThreads",
        start_cooperation_date: "2023-02-15",
        contact_number: "+1234567895",
        email: "info@trendythreads.com"
    },
    {
        id: 7,
        name: "ActiveLife",
        start_cooperation_date: "2022-09-10",
        contact_number: "+1234567896",
        email: "info@activelife.com"
    },
    {
        id: 8,
        name: "TechStyle",
        start_cooperation_date: "2020-07-05",
        contact_number: "+1234567897",
        email: "info@techstyle.com"
    },
    {
        id: 9,
        name: "UrbanChic",
        start_cooperation_date: "2018-04-20",
        contact_number: "+1234567898",
        email: "info@urbanchic.com"
    },
    {
        id: 10,
        name: "CosmicClothing",
        start_cooperation_date: "2023-11-28",
        contact_number: "+1234567899",
        email: "info@cosmicclothing.com"
    },
    {
        id: 11,
        name: "SportyStyle",
        start_cooperation_date: "2020-01-15",
        contact_number: "+1234567800",
        email: "info@sportystyle.com"
    },
    {
        id: 12,
        name: "CasualTrends",
        start_cooperation_date: "2019-06-03",
        contact_number: "+1234567801",
        email: "info@casualtrends.com"
    },
    {
        id: 13,
        name: "ChicDesigns",
        start_cooperation_date: "2022-03-20",
        contact_number: "+1234567802",
        email: "info@chicdesigns.com"
    },
    {
        id: 14,
        name: "VogueWear",
        start_cooperation_date: "2018-10-12",
        contact_number: "+1234567803",
        email: "info@voguewear.com"
    },
    {
        id: 15,
        name: "LuxuryLifestyle",
        start_cooperation_date: "2021-08-18",
        contact_number: "+1234567804",
        email: "info@luxurylifestyle.com"
    },
    {
        id: 16,
        name: "GlamourZone",
        start_cooperation_date: "2020-05-25",
        contact_number: "+1234567805",
        email: "info@glamourzone.com"
    },
    {
        id: 17,
        name: "ModishMania",
        start_cooperation_date: "2019-02-10",
        contact_number: "+1234567806",
        email: "info@modishmania.com"
    },
    {
        id: 18,
        name: "TrendyTwist",
        start_cooperation_date: "2023-07-30",
        contact_number: "+1234567807",
        email: "info@trendytwist.com"
    },
    {
        id: 19,
        name: "ClassicCouture",
        start_cooperation_date: "2018-12-05",
        contact_number: "+1234567808",
        email: "info@classiccouture.com"
    },
    {
        id: 20,
        name: "ModernStyle",
        start_cooperation_date: "2021-04-22",
        contact_number: "+1234567809",
        email: "info@modernstyle.com"
    }
]



export function getAllCountries() {
    return [...manufacturers];
}

export function getManufacturerByName(name) {
    const index = manufacturers.findIndex(manufacturer => manufacturer.name === name);
    if (index === -1) {
        return null;
    }
    return manufacturers[index];
}

export const findManufacturerById = (manufacturerId) => {
    return manufacturers.find(manufacturer => manufacturer.id === manufacturerId);
};
