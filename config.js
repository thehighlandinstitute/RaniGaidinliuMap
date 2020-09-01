var config = {
    style: 'mapbox://styles/negithokchom/ckdyoak99018y19ql9wi2i297',
    accessToken: 'pk.eyJ1IjoibmVnaXRob2tjaG9tIiwiYSI6ImNrZG10ZWc0bjFic20ycHEzZXJyY2M0bzEifQ.mdJqU04gSJPW5bhtshy1aw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'The Power of the Text',
    subtitle: 'Gaidinliu Notebooks as Historical Agents',
    byline: 'By THE KOHIMA INSTITUTE',
    footer: 'Negi Thokchom at THE KOHIMA INSTITUTE',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'RANI GAIDINLIU',
            description: 'The birth place of Rani Gaidinliu (1915-1993). In popular accounts, Rani Gaidinliu was born under auspicious signs. Under clear skies, lightning flashed during her birth, frightening the villagers and stopping only five days later. Gaidinliu’s mother, Karotlenliu, saw an angel in her dream who told her that the baby will be a girl. It came with a warning though. Either the mother or the child would die; if both survived then the girl would be extraordinary. The goddess Cherachamdinliu, the daughter of Bhuban cave, is said to have entered the womb of Karotlenliu, being born as Gaidinliu on 26th January 1915. Location: Lungkao, Manipur.',
            image: 'https://user-images.githubusercontent.com/70145310/91088747-2e8dec00-e670-11ea-8992-2d2df7b60296.JPG',
            location: {
                center: [ 93.31223, 24.80698 ],
                zoom: 6.00,
                pitch: 3.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {   
            id: 'Jadonang',
            title: 'GAIDINLIU’S CAPTURE',
            image: 'https://user-images.githubusercontent.com/70145310/91089361-19658d00-e671-11ea-91fc-ddc03569540c.jpg',
            description: ' In 1931, Jadonang was captured and hanged by the British after being implicated on false charges of ‘human sacrifice’. Gaidinliu, his close collaborator, escaped with a large number of followers to the North Cachar hills in Assam. Gaidinliu is then captured by the British. A fellow Naga, Dr. Haralu, is accused by her followers of conniving with the Extra Assistant Commissioner, Hari Blah, and Captain Macdonald of the paramilitary force, the Assam Rifles, and this led to her captivity in Pulomi village in the Naga hills in 1932.  Location: Pulomi. Courtesy: Museum of Archaelogy and Anthropology, Cambridge University (MAA)',
            location: {
                center: [93.90966,25.58111],
                zoom: 9.00,
                pitch: 44.50,
                bearing: 8.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Tamenglong',
            title: 'DEITIES REPRESENTING GAIDINLIU AND JADONANG',
            image: 'https://user-images.githubusercontent.com/70145310/91088777-39e11780-e670-11ea-864b-093f2ba1b364.jpg',
            description: 'Captain S.J. Duncan, Sub-Divisional Officer (SDO) at Tamenglong,Manipur, sits with deity figures from the altar at the Heraka temple of Haipou Jadonang standing before him. The photograph was taken on the occasion of the temple’s destruction, following Jadonang’s arrest. Location: Tamenglong District Headquarter. Courtesy: Museum of Archaelogy and Anthropology, Cambridge University (MAA)',
            location: {
                center: [ 93.48207,25.00135],
                zoom: 9.00,
                pitch: 44.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'TEMPLE',
            title: 'THE TEMPLE',
            image: 'https://user-images.githubusercontent.com/70145310/91089621-6ea19e80-e671-11ea-96cc-89f7052f0f01.jpg',
            description: 'Jadonang and Gaidinlius temple at Nungkao. Courtesy: Museum of Archaelogy and Anthropology, Cambridge University (MAA)',
            location: {
                center: [93.31223, 24.80698],
                zoom: 9.00,
                pitch: 44.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'European',
            title: 'THE EUROPEANS',
            image: 'https://user-images.githubusercontent.com/70145310/91089470-38fcb580-e671-11ea-9f25-43a641170f7c.jpg',
            description: 'Three Europeans at Jadonang’s temple. Location: Nungkao. Courtesy: Museum of Archaelogy and Anthropology, Cambridge University (MAA)',
            location: {
                center: [93.31223, 24.80698],
                zoom: 9.00,
                pitch: 44.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'HOUSE',
            title: 'JADONANG’S HOUSE',
            image: 'https://user-images.githubusercontent.com/70145310/91089613-6ba6ae00-e671-11ea-9741-228e9df9183b.jpg',
            description: 'The house of Haipou Jadonang, founder of the Heraka movement, in Kambiron. A manuscript caption on the reverse of the print reads "Giudliau’s village" - probably "Gaidinliu". Location: Kambiron. Courtesy: Museum of Archaelogy and Anthropology, Cambridge University (MAA) ',
            location: {
                center: [93.38293,24.73634],
                zoom: 9.00,
                pitch: 46.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Museum',
            title: 'THE PITT RIVERS MUSEUM',
            image: 'https://user-images.githubusercontent.com/70145310/91088855-5b420380-e670-11ea-8a85-eb13a0ae9513.jpg',
            description: 'Oxford, England.',
            location: {
                center: [ -1.25501, 51.75871 ],
                zoom: 15.00,
                pitch: 60.00,
                bearing: 00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Property',
            title: 'GAIDINLIU COLLECTION',
            image: 'https://user-images.githubusercontent.com/70145310/91088809-47969d00-e670-11ea-947a-5ab8dd0a7c60.JPG',
            description: 'The Gaidinliu Notebooks- Her captor, J.P Mills, who was a colonial administrator, anthropologist, collector, and author, offered this unflatettering description of Gaidinliu: "Magic books of the sorceress Gaidiliu [sic] captured with her other property in March 1932". Location: Oxford, England. Courtesy The Pitt Rivers Museum.',
            location: {
                center: [ -1.25501, 51.75871 ],
                zoom: 16.77,
                pitch: 60.00,
                bearing: 35.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Noteboook',
            title: 'GAIDINLIU NOTEBOOKS',
            image: 'https://user-images.githubusercontent.com/70145310/91089481-3c903c80-e671-11ea-93e0-b27715632086.JPG',
            description: 'The Gaidinliu Notebooks- "The writing is apparently nothing but meaningless scribbling. She is a Kabui girl of no education at all and taught herself to scribble. Her "literary" power gave her immense prestige and she used to send written message to her adherents- with verbal message to say what they meant" (JP Mills- commenting on the Notebooks). Location : Oxford. Image: Courtesy The Pitt Rivers Museum',
            location: {
                center: [ -1.25501, 51.75871 ],
                zoom: 16.77,
                pitch: 60.00,
                bearing: 116.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Cloth',
            title: 'GAIDINLIU’S BODY CLOTH',
            image: 'https://user-images.githubusercontent.com/70145310/91088868-6006b780-e670-11ea-87a0-aceff5549ae0.jpg',
            description: 'Sample of cloth belonging to Gaidinliu. Location: Oxford, Pitt Rivers Museum',
            location: {
                center: [ -1.25501, 51.75871 ],
                zoom: 16.77,
                pitch: 60.00,
                bearing: -176.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'Ornaments',
            title: 'GAIDINLIU’S ORNAMENTS',
            image: 'https://user-images.githubusercontent.com/70145310/91088816-4a918d80-e670-11ea-9bef-2a4a4f95b5e6.jpg',
            description: 'Sample of bracelet worn by Gaidinliu. Location: Oxford, Pitt Rivers Museum',
            location: {
                center: [ -1.25501, 51.75871 ],
                zoom: 16.77,
                pitch: 60.00,
                bearing: -113.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'The copies',
            title: 'RETURNS AND THE DIGITAL AFTERLIVES',
            image: 'https://user-images.githubusercontent.com/70145310/91088852-5a10d680-e670-11ea-888b-9e36ebc2dea1.jpg',
            description: 'Taking copies of the Gaidinliu collection on mobile phone to Assam. Location: Laisong',
            location: {
                center: [ 93.29770,25.20460],
                zoom: 9.00,
                pitch: 60.00,
                bearing: 12.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {   
            id: 'The Copy',
            title: 'RETURNS AND THE DIGITAL AFTERLIVES',
            image: 'https://user-images.githubusercontent.com/70145310/91088844-57ae7c80-e670-11ea-9d1d-4998bbb9f305.jpg',
            description: 'Taking copies of the Gaidinliu collection on mobile phone to Assam. Location: Hereilo',
            location: {
                center: [ 93.32645,25.24967],
                zoom: 9.00,
                pitch: 44.00,
                bearing: 36.80
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
