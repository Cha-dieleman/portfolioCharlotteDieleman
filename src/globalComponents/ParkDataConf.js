    // la data renvoyée par orderData doit être sous ce format :
    // const data = [
    //     [
    //         columnField1, // tableHead : champ de la colonne 1
    //         columnField2, // tableHead : champ de la colonne 2
    //         columnField3  // tableHead : champ de la colonne 3
    //     ],
    //     [
    //         [value1,value2,value3], // tableBody : ligne 1 du tableau
    //         [value1,value2,value3], // tableBody : ligne 2 du tableau
    //         [value1,value2,value3]  // tableBody : ligne 3 du tableau
    //     ]
    // ]

export const orderData = (data) => {
    if(data) {
        let value = []
        // Construction des labels du futur tableau utilisant tableToCustomize :
        let dataReady = [
            [
                'PROPRIETES',
                ''
            ]
        ]

        // Construction des lignes du futur tableau utilisant tableToCustomize :
        let secondPartOfDataReady = []
        const configData = [
            {
                technicalName: 'horaires',
                label: 'Horaires'
            },
            {
                technicalName: 'acces',
                label: 'Accès'
            },
            {
                technicalName: 'chien',
                label: 'Chiens acceptés'
            },
            {
                technicalName: 'esp_can',
                label: 'Espace canin'
            },
            {
                technicalName: 'eau',
                label: 'Accès eau potable'
            },
            {
                technicalName: 'toilettes',
                label: 'Toilettes'
            },
            {
                technicalName: 'clos',
                label: 'Espace clos'
            },
            {
                technicalName: 'surf_tot_m2',
                label: 'Surface totale du parc'
            },
            {
                technicalName: 'type_equip',
                label: `Type d'équipement proposés`
            }
        ]

        configData.map(line => {
            if (data[line.technicalName] === undefined){
                switch (line.technicalName) {
                    default:
                        value = [line.label, `En cours d'ajout`]
                }
            } else {
                switch (line.technicalName) {
                    case 'surf_tot_m2':
                        value = [line.label, `${data[line.technicalName]} m\u00b2`]
                        break
                    default:
                        if(data[line.technicalName] === null){
                            value = [line.label, `En cours d'ajout`]
                        } else if(data[line.technicalName]=== ' '){
                            // ne pas suppr ce cas particulier possible
                            value = [line.label, `En cours d'ajout`]
                        }else if(data[line.technicalName]=== ''){
                            value = [line.label, `En cours d'ajout`]
                        } else {
                            value = [line.label, data[line.technicalName]]
                        }
                }
            }
            secondPartOfDataReady.push(value)
            return null
        })
        dataReady.push(secondPartOfDataReady)
        return dataReady
    } else {
        return (
            [
                [
                    `PROPRIETES`, // tableHead : champ de la colonne 1
                    '' // tableHead : champ de la colonne 2
                ],
                [
                    [`En cours de développement`,`En cours de développement`], // tableBody : ligne 1 du tableau
                    [`En cours de développement`,`En cours de développement`] // tableBody : ligne 2 du tableau
                ]
            ]
        )
    }
}