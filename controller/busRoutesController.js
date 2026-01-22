const busRouteController = async (req, res) => {
    try {
        res.json({ message: 'bus route is working' });
    } catch (error) {
        console.log('Server error', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = busRouteController;
