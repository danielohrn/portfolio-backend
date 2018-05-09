const router = require('express').Router(); 
const skillController = require('./controllers/SkillController'); 


/* 
* GET all skills from DB
*/
router.get('/skills', skillController.getAllSkillsAndAddons);

/* 
* POST a new skill to DB 
*/
router.post('/skill', skillController.newSkill); 



module.exports = router; 