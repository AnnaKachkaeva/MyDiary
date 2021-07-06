let MyDiary = {//add unique name check
    counter : 5,
    folders:[
        {
            'name' : "folder0",
            'id' : 0,
            'notes' : [{
                'name' : "note0",
                'id' : 2,
                'text' : '<p style="color:red;">I am red</p>\n'+'<br>\n'+
                            '<p style="color:blue;">I am blue</p>\n'
            }]
        },
        {
            'name' : "folder1",
            'id' : 1,
            'notes' : []
        },
        {
            'name' : "folder2",
            'id' : 3,
            'notes' : [{
                'name' : "note0",
                'id' : 4,
                'text' : 'my text of note0 from folder2'
            }]
        }
    ],

    findObject: function(obj, arr){//finds obj in arr
        for(let i of arr){
            if (i.name == obj){
                return i
            } 
        }
    },

    createFolder: function(folferName){
        let newfold = new Object()
        newfold.name = this.setName("folder")
        newfold.id = this.counter++
        newfold.notes = []
        this.folders.push(newfold)

        // console.log("folder created")
        // console.log(this.folders)

        return newfold
    },

    createNote: function(folderName){
        let newNote = new Object();
        let folder = this.findObject(folderName, this.folders)

        newNote.name = this.setName("note", folder.notes);
        newNote.id = this.counter++
        newNote.text = `text`; 

        
        folder.notes.push(newNote)

        return newNote
    },

    deleteFolder: function(folferName){
        for(let i =0; i< folders.length; i++ ){
            if (this.folders[i].name = folderName){
                this.folders[i].remove()
                console.log(this.folders)
            }
        }
    },

    delete: function(instance, folderName, noteName){
        switch (instance) {
            case "note":
                for(let i in this.folders){
                    if(this.folders[i].name == folderName){
                        for(let n in this.folders[i].notes){
                            if(this.folders[i].notes[n].name == noteName){
                                console.log(this.folders[i].notes.splice(n,1))
                            }
                        }
                    }
                }
                break;

            case "folder":
                for(let i in this.folders){
                    if(this.folders[i].name == folderName){
                        console.log(this.folders.splice(i,1))
                    }
                }
                break;
            default:
                return console.log("something went wrong in 'delete' function")
        }
        
    },

    setName: function(instance, folder){

        switch (instance) {
            case "folder":
                do{
                    var name = prompt("Please enter unique name of your folder", "folder-name")
                }while(!this.isUnique(this.folders, name))
                return name
            case "note":
                do{
                    var name = prompt("Please enter unique name of your folder", "note-name")
                }while(!this.isUnique(folder, name))
                return name
            default:
                return console.log("something went wrong in 'setName' function")
        }
        
    },

    isUnique: function(arr, name){
        let isUnique = true
        for(let i of arr){
            if (i.name == name || name == ""){
                isUnique = false
            }
        }
        return isUnique
    },

    changeText: function(folderName, noteName, text){
        
        let folder = this.findObject(folderName, this.folders);
       
        let note = this.findObject( noteName, folder.notes);
        note.text = text;
    }
}