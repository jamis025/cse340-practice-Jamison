import * as facultyModel from '../../models/faculty/faculty.js';

export const getFacultyList = (req, res) => {
    const facultyList = facultyModel.getAllFaculty();
    res.render('faculty/list', { facultyList });
};

export const getFacultyDetail = (req, res) => {
    const facultyId = req.params.facultyId;
    const member = facultyModel.getFacultyById(facultyId);

    if (!member) {
        return res.status(404).send('Faculty member not found');
    }

    res.render('faculty/detail', { member });
};

  const facultyArray = [];
  for (const key in faculty) {
    facultyArray.push({ ...faculty[key], id: key });
  }

  facultyArray.sort((a, b) => {
    if (a[validSortBy] < b[validSortBy]) {
      return -1;
    }
    if (a[validSortBy] > b[validSortBy]) {
      return 1;
    }
    return 0;
  });

  return facultyArray;
};

export { getFacultyById, getSortedFaculty };
