const body = document.querySelector('body');

//Open the project menu
function openProjet() {
    const btnOpenSetting = document.getElementById('settingButton');
    const btnOpenProject = document.getElementById('bodyAddingButton');

    btnOpenProject.addEventListener('click', function () {
        const project = document.getElementById('project');
        project.style.display = 'block';
        disablingCursor();
    });
}

//Close the project menu
function closeProject() {
    const btnClose = document.getElementById('closeButtonProject');

    btnClose.addEventListener('click', function () {
        const project = document.getElementById('project');
        project.style.display = 'none';
    });
}

//Open the setting menu
function openSetting() {
    const btnOpenSetting = document.getElementById('settingButton');

    btnOpenSetting.addEventListener('click', function () {
        const setting = document.getElementById('setting');
        setting.style.display = 'block';
        disablingCursor();
    });
}

//Close the setting menu
function closeMenu() {
    const btnClose = document.getElementById('closeButtonSettings');

    btnClose.addEventListener('click', function () {
        const setting = document.getElementById('setting');
        setting.style.display = 'none';
    });
}

function disablingCursor() {
    const btnOpenSetting = document.getElementById('settingButton');
    const btnOpenProject = document.getElementById('bodyAddingButton');

    btnOpenProject.disabled = true;
    btnOpenSetting.disabled = true;
    btnOpenProject.style.cursor = 'default';
    btnOpenSetting.style.cursor = 'default';
}