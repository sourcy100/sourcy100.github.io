
const banner = document.getElementById("banner-style");
const foldername = document.URL.split('/')
const filename = foldername[foldername.length-2].split('#')[0]

banner.innerHTML = `#banner {
background: url("/banners/${(filename != window.location.host) ? filename : 'index'}.png");
background-repeat: no-repeat;
background-size: 600px 300px;
background-position: center;
}
`