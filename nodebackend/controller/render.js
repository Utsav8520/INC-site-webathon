const { model } = require("mongoose");
const user = require('./../model/user')

exports.renderLogin = async(req, res, next) => {
    res.status(200).render('signin.pug')
}

exports.renderFirst = async(req, res, next) => {
    res.status(200).render("index.pug");
};

exports.renderTable = async(req, res, next) => {
    const userData = await user.find();
    res.status(200).render("table.pug", {
        userData
    });
};

exports.renderbills = async(req, res, next) => {
    const userData = await user.find();
    res.status(200).render("bills.pug", {
        userData
    });
};

exports.renderThird = async(req, res, next) => {
    res.status(200).render("form.pug");
};

// another pannel
exports.studentDashboard = async(req, res, next) => {
    res.status(200).render("./next/dashboard.pug");
};

exports.studentTable = async(req, res, next) => {
    res.status(200).render("./next/tables.pug");
};

exports.studentBilling = async(req, res, next) => {
    // console.log("ads");
    res.status(200).render("./next/billing.pug");
};

exports.studentProfile = async(req, res, next) => {
    res.status(200).render("./next/profile.pug");
};