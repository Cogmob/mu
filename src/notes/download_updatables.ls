mu_src_path,    root_path,    version,    cb 

make_archive.
extract_archive.
isolate_updatables.

make_archive
    mkdir    root_path + '/generated_local',    cont.
    find_project_root    mu_src_path,    cont    tool_root
    archive.
        repoPath:    tool_root + '/.git'
        commit:    version
        outputPath:    root_path + '/generated_local/updatables.tar'
        list:`
            13
            2.3
    .then    next.
    .fail    er => raise    er

extract_archive
    mkdir    root_path + '/generated_local/updatables',    cont.
    create_read_stream    root_path + '/generated_local/updatables.tar'
    .pipe    tar.extract.
        root_path + '/generated_local/updatables'
    .on    'finish',    next
    .on    'error',    throw

isolate_updatables
    remove  root_path + '/generated_local/lambda_updatables',    cont.
    move.
        root_path + '/generated_local/updatables/gen/release/updatables'
        root_path + '/generated_local/lambda_updatables'
        cont.
    remove    root_path + '/generated_local/updatables.tar',    cont.
    remove    root_path + '/generated_local/updatables',    cont.
    next.
