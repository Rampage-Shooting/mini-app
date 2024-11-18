function OpenWebPage(url) {
    window.open(url, "_blank");
}

function ResizeCanvas()
{
    document.body.scrollTop = 0 
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.scrollTo(0, Math.max(scrollHeight - 1, 0));

    document.activeElement.focus()
    
    if (unityInstance && unityInstance.Module && unityInstance.Module.canvas) {
        unityInstance.Module.canvas.focus();
    }
}
