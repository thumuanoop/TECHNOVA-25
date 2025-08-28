// Pricing data
const pricing = {
    hackathon: [159, 299, 399, 499],
    coding: [139, 139, 199, 199],
    combo: [249, 479, 649, 879]
};

// Registration URLs
const registrationUrls = {
    hackathon: 'https://docs.google.com/forms/d/e/1FAIpQLSe5_d-nMZ1Nu4TtHjnwgVA-0-_-V7TMRGJ_xgwa4lIKlRNdAA/viewform?usp=header',
    coding: 'https://docs.google.com/forms/d/e/1FAIpQLSdFSuZsoyLUoY66d_RwBQkLh6obU8PygfS3nvUA_jEUsZQ6IQ/viewform?usp=header',
    combo: 'https://docs.google.com/forms/d/e/1FAIpQLSdhI22TIGOkShGu8kLeI3-AX4QjVD15BbhaNazYtb8xsaVXfQ/viewform?usp=header'
};

let selectedTeamSize = 1;
let selectedRegistrationType = null;

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Team size selection
function selectTeamSize(size) {
    selectedTeamSize = size;
    
    // Update team option selection
    document.querySelectorAll('.team-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-size="${size}"]`).classList.add('selected');
    
    // Update pricing
    updatePricing();
}

// Update pricing display
function updatePricing() {
    const hackathonPrice = pricing.hackathon[selectedTeamSize - 1];
    const codingPrice = pricing.coding[selectedTeamSize - 1];
    const comboPrice = pricing.combo[selectedTeamSize - 1];
    
    document.getElementById('hackathon-price').textContent = `₹${hackathonPrice}`;
    document.getElementById('coding-price').textContent = `₹${codingPrice}`;
    document.getElementById('combo-price').textContent = `₹${comboPrice}`;
    
    const teamText = selectedTeamSize === 1 ? 'per person (1 member team)' : `for ${selectedTeamSize} member team`;
    document.getElementById('hackathon-desc').textContent = teamText;
    document.getElementById('coding-desc').textContent = teamText;
    document.getElementById('combo-desc').textContent = teamText;
}

// Open registration
function openRegistration(type) {
    selectedRegistrationType = type;
    
    const typeNames = {
        hackathon: 'Hackathon',
        coding: 'Coding Competition',
        combo: 'Combo Pass'
    };
    
    const registrationLinks = document.getElementById('registrationLinks');
    const registrationMessage = document.getElementById('registrationMessage');
    const registrationUrl = document.getElementById('registrationUrl');
    
    registrationMessage.textContent = `Complete your ${typeNames[type]} registration for ${selectedTeamSize} member team:`;
    registrationUrl.href = registrationUrls[type];
    
    registrationLinks.classList.add('visible');
    
    // Scroll to registration links
    setTimeout(() => {
        registrationLinks.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Initialize pricing on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePricing();
});