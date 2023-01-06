//Open the project menu
function openProjet() {
    const project = document.getElementById('project');
    project.style.display = 'block';
    disablingCursor();
}

//Close the project menu
function closeProject() {
    const project = document.getElementById('project');
    project.style.display = 'none';
    enablingCursor();
}

//Open the setting menu
function openSetting() {
    const setting = document.getElementById('setting');
    setting.style.display = 'block';
    disablingCursor();
}

//Close the setting menu
function closeMenu() {
    const setting = document.getElementById('setting');
    setting.style.display = 'none';
    enablingCursor();
}

function disablingCursor() {
    const btnOpenSetting = document.getElementById('settingButton');
    const btnOpenProject = document.getElementById('bodyAddingButton');

    btnOpenProject.disabled = true;
    btnOpenSetting.disabled = true;
    btnOpenProject.style.cursor = 'default';
    btnOpenSetting.style.cursor = 'default';
}

function enablingCursor() {
    const btnOpenSetting = document.getElementById('settingButton');
    const btnOpenProject = document.getElementById('bodyAddingButton');

    btnOpenProject.disabled = false;
    btnOpenSetting.disabled = false;
    btnOpenProject.style.cursor = 'pointer';
    btnOpenSetting.style.cursor = 'pointer';
}