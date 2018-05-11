
/*
* returns reduced skills and addons 
*/
function composeSkillsAndAddons(skills, addons) {

    const SKILLS_AND_ADDONS = {}; 

    return skills.reduce((skillsAndAddons, value) => {
        skillsAndAddons[value.category] = skillsAndAddons[value.category] || {};
        skillsAndAddons[value.category].skills = skillsAndAddons[value.category].skills || []; 

        skillsAndAddons[value.category].skills.push(value); 

        if(value.has_addons && !skillsAndAddons[value.category].addons) {
            
            const CATEGORY_NAME = value.category;
            skillsAndAddons[CATEGORY_NAME].addons = skillsAndAddons[CATEGORY_NAME].addons || []; 
            
            const addonsWithMatchingCategory = addons.filter(addon => addon.category === CATEGORY_NAME );
            skillsAndAddons[CATEGORY_NAME].addons = addonsWithMatchingCategory; 
        }

        return skillsAndAddons; 

    }, SKILLS_AND_ADDONS); 
}

/* 
* Selects all from a DB table 
*/ 
function selectAllFrom(table, dbConnection) {
    return new Promise((resolve) => {
        dbConnection.query(`SELECT * FROM ${table}`, (error, result) => {
            if(result && !error) {
                resolve(result); 
            }
        }); 
    });
}


module.exports = {
    composeSkillsAndAddons, 
    selectAllFrom
};
