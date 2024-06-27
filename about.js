// script.js

// Set the minimum date to today for the date input field
window.addEventListener('DOMContentLoaded', (event) => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const plan = document.getElementById("plan").value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    if (profilePicture) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const imgSrc = event.target.result;

            const profileHTML = `
            <div class="profile" id="profile">
                <div class="profile-info">
                    <img src="${imgSrc}" alt="Profile Picture" class="profile-picture">
                    <div class="profile-text">
                        <h2>${name}</h2>
                        <p><strong>Date:</strong> ${date}</p>
                        <p><strong>Time:</strong> ${time}</p>
                        <p><strong>Location:</strong> ${location}</p>
                        <p><strong>Plan:</strong> ${plan}</p>
                    </div>
                </div>
            </div>
        `;

            document.getElementById('result').innerHTML = profileHTML;

            // Wait for the profile to render
            setTimeout(() => {
                const profileElement = document.getElementById('profile');
                if (profileElement) {
                    html2canvas(profileElement, { scale: 2 }).then(canvas => {
                        canvas.toBlob(function(blob) {
                            const link = document.createElement('a');
                            link.download = 'date_profile.png';
                            link.href = URL.createObjectURL(blob);
                            link.click();

                            // Clean up the URL object
                            URL.revokeObjectURL(link.href);
                        }, 'image/png');
                    }).catch(err => {
                        console.error('Error during canvas creation:', err);
                    });
                } else {
                    console.error('Profile element not found.');
                }
            }, 1000); // Adjust timeout if necessary
        };

        reader.onerror = function(event) {
            console.error('File could not be read: ' + event.target.error.code);
        };

        reader.readAsDataURL(profilePicture);
    } else {
        console.error('No profile picture uploaded.');
    }
});
