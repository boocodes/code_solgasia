



function getLastUrlPath()
{
    const currentUrl = window.location.href;
    const currentUrlWithoutDomen = currentUrl.replace("http://localhost:3000" + "/", '');
    if(currentUrlWithoutDomen.length == 0)
    {
        return "/";
    }
    else
    {
        const lastSlashPosition = currentUrlWithoutDomen.lastIndexOf("/");
        console.log(currentUrlWithoutDomen.substring(lastSlashPosition + 1, currentUrlWithoutDomen.length));
        return currentUrlWithoutDomen.substring(lastSlashPosition + 1, currentUrlWithoutDomen.length);
    }
}


export default getLastUrlPath;