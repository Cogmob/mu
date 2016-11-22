const path = require('path');
const vargs = require('vargs-callback');
const inquirer = require('inquirer');
const open = require('open');
const git = require('simple-git');

const store = vargs((full_path, host, should_prompt, prompt_res, cb) => {
    const project_name = path.basename(full_path);

    var remote_path = 'git@bitbucket.org:Cogbot/' + project_name + '.git';
    var url = 'https://bitbucket.org/repo/create';

    if (host === 'github') {
        remote_path = 'git@github.com:Cogmob/' + project_name + '.git';
        url = 'https://github.com/new';}

    if (host !== 'bitbucket' && host !== 'github') {
        return cb('please select either bitbucket or github as the host');}


    if (should_prompt) {
        open(url);
        inquirer.prompt([{
            type: 'list',
            name: 'is_ready',
            message: 'is the remote ready?',
            choices: ['yes', 'no']}]).then(cont(prompt_res));}

    if (prompt_res.is_ready === 'yes'){
        git(full_path).removeRemote('origin', cont(err));
        git(full_path).addRemote('origin', remote_path, cont(er));
        if (er && er !== 'fatal: remote origin already exists.\n') {
            return cb(er);}
        git(full_path).push('origin', 'master', ['-u'], cont(err));
        console.log(remote_path);}

    cb('');});

module.exports = store;
