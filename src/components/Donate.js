// import './Donate.css';
// import React, { useState } from 'react';

// const Donation = () => {
//     const [donationAmount, setDonationAmount] = useState('');

//     const handleDonationChange = (e) => {
//         setDonationAmount(e.target.value);
//     };

//     const handleDonationSubmit = (e) => {
//         e.preventDefault();
//         // Perform donation processing or submission here
//         console.log('Donation amount:', donationAmount);
//         // Reset the donation amount after submission
//         setDonationAmount('');
//     };

//     return (
//         <div>
//             <h2>Donate Now</h2>
//             <form onSubmit={handleDonationSubmit}>
//                 <label>
//                     Donation Amount:
//                     <input
//                         type="number"
//                         min="1"
//                         step="1"
//                         value={donationAmount}
//                         onChange={handleDonationChange}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Donate</button>
//             </form>
//         </div>
//     );
// };

// export default Donation;
import React, { useState } from 'react';

const Donation = () => {
    const [donationAmount, setDonationAmount] = useState('');

    const handleDonationChange = (e) => {
        setDonationAmount(e.target.value);
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        // Perform donation processing or submission here
        console.log('Donation amount:', donationAmount);
        // Redirect to the desired link
        window.location.href = 'https://pages.razorpay.com/studycenter'; // Replace with your desired link
    };

    return (
        <div>
            <h2>Donate Now</h2>
            <form onSubmit={handleDonationSubmit}>
                {/* <label>
                    Donation Amount:
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={donationAmount}
                        onChange={handleDonationChange}
                        required
                    />
                </label> */}
                <button type="submit">Donate</button>
            </form>
        </div>
    );
};

export default Donation;

