// This file is just for notes for building the app!

// This is the array of the kinds of soils that plants like:

const soil_types = ['Clay', 'Loam', 'Sand', 'Silt', 'Peat', 'Chalk'];

// This is the array of the kinds of sunlight plants like:

const sun_types = [
        'Full Sun (6+ hours of direct sun daily)', 
        'Part Sun (3-6 hours of direct sun daily)', 
        'Part Shade (3-6 hours of indirect sun daily)', 
        'Full Shade (less than 3 hours of direct sun daily)'];

// Let's map out the object that represents each plant!

const plant = {
    name: 'String', 
    image_url: 'String of url link to image',
    description: 'String, describing plant. Short. 30 words max? ',
    soil_type: 'Number, representing index in the array "soil_types" ',
    sun_type: 'Number, representing index in the array "sun_types" ',
    germination: 'Number, representing how many days until seeds germinate',
    days_to_harvest: 'Number, although maybe this should be part of the text description ',
    seed_propagation: 'String, possibly containing a link to another page showing them how',
    diseases_pests: 'String or array containing diseases and pests',
};

// Let's map out what an info page looks like:

const info_page = {
    title: 'String',
    sub_title: 'String',
    image_url: 'String of url link to image',
    info_text: 'String of Paragraph'
};