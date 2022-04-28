const PlantMasterList = {

    cilantro: {
        id: 0,
        name: 'Cilantro', 
        image_url: '#',
        description: 'String, describing plant. Short. 30 words max? ',
        soil_type: "Loam",
        sun_type: 'Number, representing index in the array "sun_types" ',
        germination: 'Number, representing how many days until seeds germinate',
        days_to_harvest: 'Number, although maybe this should be part of the text description ',
        seed_propagation: 'String, possibly containing a link to another page showing them how',
        diseases_pests: 'String or array containing diseases and pests',
    }

};

// const SoilTypes = ['Clay', 'Loam', 'Sand', 'Silt', 'Peat', 'Chalk'];

// const SunTypes = [
//     'Full Sun (6+ hours of direct sun daily)', 
//     'Part Sun (3-6 hours of direct sun daily)', 
//     'Part Shade (3-6 hours of indirect sun daily)', 
//     'Full Shade (less than 3 hours of direct sun daily)'];

export default PlantMasterList;