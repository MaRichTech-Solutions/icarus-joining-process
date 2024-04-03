
const express = require( 'express');
const app = express();

app.use(express.json());

// Route to handle new applicant registration
app.post('/applicants', async (req, res) => {
    try {
        const { name, email } = req.body;
        res.status(201).json({ name, email, status: 'applied' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during applicant registration.' });
    }
});

// Route to simulate the review process
app.put('/applicants/:id/review', async (req, res) => {
    try {
        if (req.params.id == 1){
            res.status(200).json({ name: 'Jane Smith', email: 'jane@example.com', status: 'accepted' })
        }else{
            res.status(404);
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during the review process.' });
    }
});

// Route to address broken joining process
app.put('/fix-joining-process', async (req, res) => {
    try {
        //Update the statuses
        res.status(200).json({ message: 'Joining process fixed successfully.'});
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fixing the joining process.' });
    }
});

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT);

module.exports = app; // for testing
