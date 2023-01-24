import Avatar from '../assets/images/user.png'
export const todoCards = [{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    dates:'Jan 3.'
},
{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    numOfComments:7,
    numOfFilters:2,
    dates: 'May 8. - Sep 10.',
    profileImgs:[Avatar]

},

{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
   
},
{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    statusColors:['#4B9AE5','#F47075','#64CD7C','#FFC236','#B06AD1',],
    numOfComments:7,
    numOfFilters:2,
    dates: 'May 8. - Sep 10.'
},
{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    statusColors:['#4B9AE5','#F47075','#64CD7C','#FFC236','#B06AD1',],


    numOfComments:7,
    numOfFilters:2,
    dates: 'May 8. - Sep 10.'
}
,
{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    statusColors:['#4B9AE5','#F47075','#64CD7C','#FFC236','#B06AD1',],


    numOfComments:7,
    numOfFilters:2,
    dates: 'May 8. - Sep 10.'
}
,
{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    statusColors:['#4B9AE5','#F47075','#64CD7C','#FFC236','#B06AD1',],


    numOfComments:7,
    numOfFilters:2,
    dates: 'May 8. - Sep 10.'
}


]

export const inProgressCards = [
    {
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        statusColors:['#4B9AE5','#F47075'],
        profileImgs:[Avatar,Avatar,Avatar],
        numOfComments:7,
        numOfFilters:2,
        dates: 'May 8. - Sep 10.'
    },
    {
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        statusColors:['#FFC236','#64CD7C'],
        profileImgs:[Avatar],
    
    
        numOfComments:7,
        numOfFilters:2,
        dates: 'May 8. - Sep 10.'
    },
    {
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        profileImgs:[Avatar],

       
    },
]

export const reviewCards = [
    {
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        statusColors:['#4B9AE5'],
        numOfComments:7,
        numOfFilters:2,
        dates: 'May 8. - Sep 10.'
    },
    {
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      
        dates: 'May 8. - Sep 10.'
    },
    {
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      
    },
]

export const testingCards = [
    {
        text:'Lorem Ipsum is simply dummy text of the.',
        statusColors:['#4B9AE5','#F47075','#64CD7C','#FFC236','#B06AD1',],

    
    
        numOfComments:7,
        numOfFilters:2,
        dates: 'May 8. - Sep 10.'
    },
]
export const completeCards = [
    {
        isCompleted:true,
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      
        dates: 'May 8. - Sep 10.'
    },
    {
        isCompleted:true,
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      
    },
]

export const columnList = [
    {
title:'To Do',
list:todoCards
    },
    {
        title:'In Progress',
        list:inProgressCards
            },
            {
                title:'Ready for review',
                list:reviewCards
                    },
                    {
                        title:'Testing',
                        list:testingCards
                            },
                          
]