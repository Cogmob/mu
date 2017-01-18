src_path,    root,    version,    cb 

make_archive.
extract_archive.
isolate_updatables.

make_archive
    mkdir    root + '/generated_local',    cont.
    find_project_root    src_path,    cont    tool_root
    archive.
        repoPath:    tool_root + '/.git'
        commit:    version
        outputPath:    root + '/generated_local/updatables.tar'
        list:`
            13
            2.3
    .then    next.
    .fail    er => raise    er

extract_archive
    mkdir    root + '/generated_local/updatables',    cont.
    create_read_stream    root + '/generated_local/updatables.tar'
    .pipe    tar.extract.
        root + '/generated_local/updatables'
    .on    'finish',    next
    .on    'error',    throw

isolate_updatables
    remove  root + '/generated_local/lambda_updatables',    cont.
    move.
        root + '/generated_local/updatables/gen/release/updatables'
        root + '/generated_local/lambda_updatables'
        cont.
    remove    root + '/generated_local/updatables.tar',    cont.
    remove    root + '/generated_local/updatables',    cont.
    next.
