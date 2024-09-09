
const toggle = document.getElementById('toggle') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLTableSectionElement;

if (toggle && skills){
    toggle.addEventListener('click',()=> {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
            toggle.textContent = 'Hide Section';
        } else {
            skills.style.display = 'none';
            toggle.textContent = 'Show Section'
        }
    });
}


// function toggleSkillsSection() {
//     const skillsSection = document.getElementById('skills');
//     if (skillsSection) {
//         skillsSection.style.display = (skillsSection.style.display === 'none' || skillsSection.style.display === 'block') ? 'block' : 'none';
//     }
// }

// Event listener for the button
// const button = document.getElementById('toggle-skills');
// if (button) {
//     button.addEventListener('click', toggleSkillsSection);
// }
