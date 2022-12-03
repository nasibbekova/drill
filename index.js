    // 1
    let lists = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]

    let a = {
        count: 0,
        arr: []
    }
   
    let b = {
        count: 0,
        arr: []
    }

    lists.filter (list => {
        if (list.completed === true) {
            a.count ++
        } else {
            b.count ++
        }
    })

    console.log (
        a.count,
        b.count
    )
    
    // 2

    let students = [
    {
        names: 'Timur', 
        age: 17,
        gender: 'male'
    },
    {
        names: 'Zafar', 
        age: 17,
        gender: 'male'
    },
    {
        name: 'Nigina', 
        age: 17,
        gender: 'female'
    },
    {
        name: 'Madina', 
        age: 16,
        gender: 'female'
    },
    {
        names: 'Samir', 
        age: 14,
        gender: 'male'
    },
    {
        names: 'Aziz', 
        age: 15,
        gender: 'male'
    },
    {
        names: 'Mirjalol', 
        age: 18,
        gender: 'male'
    },
    {
        names: 'Umar', 
        age: 16,
        gender: 'male'
    },
    {
        names: 'Maxdi', 
        age: 15,
        gender: 'male'
    },
    {
        names: 'Munis', 
        age: 18,
        gender: 'male'
    },
    {
        names: 'Laziz', 
        age: 15,
        gender: 'male'
    }
    ]
    let male = []
    let female = []


    let total = students.reduce((a,b) => {
        return a + b.age
    }, 0)

    let average = total / students.length

    console.log(average.toFixed(1));
    
    students.filter(student =>{
        if(student === 'names') {
            male ++
        } else if (student ==='name') {
            female ++
        } 
    })
    
    console.log(
        male,
        female 
    ) 
