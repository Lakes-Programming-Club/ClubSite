document.addEventListener('DOMContentLoaded', () => {
    const levelSelect = document.getElementById('level') as HTMLSelectElement | null;
    const languageSelect = document.getElementById('language') as HTMLSelectElement | null;
    const resources = document.querySelectorAll('.resource') as NodeListOf<HTMLElement>;

    if (!levelSelect || !languageSelect) return;

    const preciseCheckbox = document.getElementById('precise-mode') as HTMLInputElement | null;


    function filterResources(levelSelect: HTMLSelectElement, languageSelect: HTMLSelectElement) {
        const selectedLevel = levelSelect.value;
        const selectedLanguage = languageSelect.value;
        const preciseMode = preciseCheckbox?.checked ?? false;

        resources.forEach(res => {
            const level = res.dataset.level;
            const language = res.dataset.language;

            const levelMatch = preciseMode
                ?level === selectedLevel
                :selectedLevel === 'all' || level === 'all' || level === selectedLevel;
            const languageMatch = preciseMode
                ?language === selectedLanguage
                :selectedLanguage === 'all' || language === 'all' || language === selectedLanguage;

            res.style.display = (levelMatch && languageMatch) ? '' : 'none';
        });
    }

    levelSelect.addEventListener('change', () => filterResources(levelSelect!, languageSelect!));
    languageSelect.addEventListener('change', () => filterResources(levelSelect!, languageSelect!));
    preciseCheckbox?.addEventListener('change', () => filterResources(levelSelect!, languageSelect!));


    filterResources(levelSelect, languageSelect);
});
