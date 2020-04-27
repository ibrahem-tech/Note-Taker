const router = require("exxpress").Router();
const notes = require("../db/notes.js");

router.get("/noets", function(req,res){
    notes.getNotes().then(function(notes){
        res.json(notes).catch(function(err){
            res.status(500).json(err);
        });
    });
});

router.post("/notes", function(req,res){
    notes.addNotes(req.body).then(function(notes){
        res.json(notes).catch(function(err){
            res.status(500).json(err);
        });
    });
});

router.delete("/notes/:id", function(req,res){
    notes.removeNotes(req.params.id).then(function(){
        res.json({ok: true}).catch(function(err){
            res.status(500).json(err);
        });
    });
});

