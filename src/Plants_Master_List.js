const PlantMasterList = {

    coriander: {
        id: 0,
        name: 'Coriander', 
        image_url: '#',
        description: 'Also known as cilantro, this fast growing herb has leaves and seeds that are great for cooking. Leaves are ready as soon as 60 - 75 days, and seeds require at least 100 days.',
        soil_type: "Loam",
        sun_type: 'Full Sun (6+ hours of direct sun daily)',
        germination: 'Number, representing how many days until seeds germinate',
        days_to_harvest: 'Number, although maybe this should be part of the text description ',
        seed_propagation: 'String, possibly containing a link to another page showing them how',
        diseases_pests: 'String or array containing diseases and pests',
    },

    oregano: {
        id: 1,
        name: 'Oregano',
        image_url: '#',
        description: 'Description',
        soil_type: "",
        sun_type: "",

    }

};

// const SoilTypes = ['Clay', 'Loam', 'Sand', 'Silt', 'Peat', 'Chalk'];

// const SunTypes = [
//     'Full Sun (6+ hours of direct sun daily)', 
//     'Part Sun (3-6 hours of direct sun daily)', 
//     'Part Shade (3-6 hours of indirect sun daily)', 
//     'Full Shade (less than 3 hours of direct sun daily)'];

export default PlantMasterList;