let id
let data
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}
if (getCookie('jwt')) {
    let auth = document.getElementById('auth')
    auth.href = '#'
    auth.textContent = 'logOut'
    document.getElementById('admin').style.display = 'inline'
    auth.addEventListener('click', () => {
        document.cookie = `jwt=; path=/; max-age=0; SameSite=Strict;`;
        auth.href = 'login.html'
        auth.textContent = 'login'
        document.getElementById('admin').style.display = 'none'
    })
} else {
    document.getElementById('admin').style.display = 'none'
}
fetch('http://localhost:3000')
    .then((result) => result.json())
    .then((result) => {
        console.log(result)
        result.forEach(blog => {
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.href = `#`
            a.textContent = blog.title
            a.id = blog._id
            a.className = 'title'
            let p = document.createElement('p')
            p.textContent = blog.short
            li.appendChild(a)
            li.appendChild(p)
            document.getElementById('blogs').appendChild(li)
        })
        let links = [].slice.call(document.querySelectorAll('.title'))
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                id = e.target.id
                fetch(`http://localhost:3000/${id}`)
                    .then((res) => res.json())
                    .then((res) => {
                        document.getElementById('title').textContent = res.result.title
                        document.getElementById('long').textContent = res.result.long
                    })
                    .catch((err) => console.log(err))
                document.getElementById('Description').style.display = 'flex'
            })
        });
    })
    .catch((err) => console.log(err))

function Close() {
    document.getElementById('Description').style.display = 'none'
}
function Delete() {
    fetch(`http://localhost:3000/admin/delete/${id}`, {
        method: 'delete',
        headers: {
            Authorization: `Bearer ${getCookie('jwt')}`,
        },
    })
        .then((res) => res.json())
        .then((res) => {
            window.location.href = './index.html'
            console.log(res.message)
        })
        .catch((err) => console.log(err))
}
