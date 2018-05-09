const connection = require('../database.js'); 
const {composeSkillsAndAddons, selectAllFrom} = require('../functions.js'); 

module.exports = {

    getAllSkillsAndAddons: (req, res, next) => {
        selectAllFrom('skills', connection)
         .then(skills =>  
            selectAllFrom('addons', connection)
             .then(addons => {
                const skillsAndAddons = composeSkillsAndAddons(skills, addons); 
                res.send(skillsAndAddons); 
             })
         ).catch(err => res.send(err)); 
    },

    newSkill: (req, res, next) => {
        res.send(req.body); 
    }
}
