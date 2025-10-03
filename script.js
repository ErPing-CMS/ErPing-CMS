// script.js - Interactive features and Google Maps integration

// Initialize Google Map
function initMap() {
    // Coordinates for Columbia Falls, MT
    const location = { lat: 48.3563, lng: -114.1986 };
    
    // Create map centered at location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ]
    });
    
    // Add marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Columbia Falls, MT'
    });
    
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<div style="color:#000"><strong>Your Location</strong><br>7th St W, Columbia Falls, MT 59912</div>'
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation to social links on hover
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('a, .skill-category');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Add ripple to button
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add scroll animation for sections
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const viewportHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < viewportHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});