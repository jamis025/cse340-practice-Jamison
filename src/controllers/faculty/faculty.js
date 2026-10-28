import {getAllFaculty, getFacultyById } from "../../models/faculty/faculty.js"

const facultyListPage = async (req, res, next) => {
    try {
        const facultyList = await facultyModel.getAllFaculty();
        
        res.render('facultyList', { 
            title: 'Faculty Directory', 
            facultyList 
        });
    } catch (error) {
        next(error); 
    }
};

const facultyDetailPage = async (req, res, next) => {
    try {
        const facultyId = req.params.id; 
        const facultyMember = await facultyModel.getFacultyById(facultyId);

        if (!facultyMember) {
            const error = new Error('Faculty member not found');
            error.status = 404;
            return next(error); 
        }

        res.render('facultyDetail', { 
            title: facultyMember.name, 
            facultyMember 
        });
    } catch (error) {
        next(error); 
    }
};

export {
    facultyListPage,
    facultyDetailPage
};