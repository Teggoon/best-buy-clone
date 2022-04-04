const sampleSets = {
    userId: "daniel.hc.li@gmail.com",
    sets: [
        {
            title: "Sample set 1",
            createdBy: "Teggoon",
            numberOfTerms: 2,
            terms: [
                {
                    term: "Piano",
                    definition: "A keyboard instrument"
                },
                {
                    term: "Violin",
                    definition: "A string instrument"
                }
            ]
        },
        {
            title: "Sample set 2",
            createdBy: "Teggoon",
            numberOfTerms: 3,
            terms: [
                {
                    term: "White",
                    definition: "#FFFFFF"
                },
                {
                    term: "Black",
                    definition: "#000000"
                },
                {
                    term: "Red",
                    definition: "#FF0000"
                }
            ]
        },

    ]
}

const getUserSets = (req, res, next) => {
    res.json(sampleSets)
}

module.exports = {
    getUserSets
};
