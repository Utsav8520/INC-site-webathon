const userModel = require("./../model/user");

exports.createAccount = async(req, res, next) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
    });

    // if (!user) {
    //     res.status(200).json({
    //         status: 'NOT AUTHORIZED',
    //         message: 'please return back you are not authorized'
    //     })
    // } else {}
    console.log(user);
    res.status(200).json({
        status: "success",
        message: "user created",
    });
};

exports.signin = async(req, res, next) => {
    console.log("signin", req.body);

    const user = await userModel.create({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        contactno: req.body.contactno,
        role: req.body.role,
        faculty: req.body.faculty,
        location: req.body.location,
    });

    res.status(200).json({
        status: "success",
        message: "user created",
    });
};

exports.searchField = async(req, res, next) => {
    console.log("signin", req.body);

    const user = await userModel.find({
        faculty: req.body.faculty,
    });

    res.status(200).json({
        status: "success",
        message: "user created",
    });
};

exports.updateInformation = async(req, res, next) => {
    const { email, studentCode } = req.body;
    let user;
    if (email) {
        user = await userModel.findOne({
            email: email,
        });
    } else if (studentCode) {
        user = await userModel.findOne({
            studentCode: studentCode,
        });
    } else if (email && studentCode) {
        user = await userModel.findOne({
            email: email,
            studentCode: studentCode,
        });
    } else {
        res.status(200).json({
            status: "faield",
            message: "FILED UNMATCHED",
        });
    }


    res.status(200).json({
        status: "success",
        user,
    });
};