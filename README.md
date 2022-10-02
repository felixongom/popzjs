# popzjs documentation

##popzjs is a javascript library for showing notification inform of error, info, successs
it can also be customized by adding you own custon class

### NB:  *it allows for adding only one custom class so far*

### How to use..
1.Download or clone the cdn folder, the folder contain popz.css and popz.js
2.add the css file link at the top and the js file link at the bottom of your html file 
*the function popz() is just called as bellow with ablect parameters as bellow...*

```
popz({
    title:'this is an error messege',
    pos:'left',
    type:'error',
    body:'sorry there was a problem with the server',
    customClasss:'d-flex'
})
```

# OR 
`popz()`

# Options
## pos ,
**position:** :top, bottom, right, left, top-right , top-left, bottom-right, bottom-left

## title , 
**title of the  messege showing**: pass in any string

## body, 
**body of the messege**: pass in the actual error body

## type,
**the type of mesege**: error, success, info, warning, ''

## customClass,
**Any custom class of your choice**: either a bootstrap class or regular css class

### NB:
**All options are optional and are passed in a single object**

