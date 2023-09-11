let mainHTML ='';
sample.forEach((smp) =>{
    mainHTML += `
    <div class="video-preview">
        <div class="thumpnail-row">
            <img class="thumbnail" src="${smp.img}" alt="">
            <div class="video-time">
                ${smp.time}
            </div>
        </div>
        <div class="video-info-grid">
            <div class="channel-picture"> <img class="channel-prof" src="${smp.proimg}" alt="">
            </div>
            <div class="video-info">
                <p class="video-title">${smp.videoinfo.title}</p>
                <p class="video-author">${smp.videoinfo.author}</p>
                <p class="video-stats">${smp.videoinfo.stat}</p>
            </div>
        </div>
    </div>
    `
})

document.querySelector('.video-grid').innerHTML
=mainHTML;