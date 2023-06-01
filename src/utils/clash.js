/**
 * 解析ss协议
 * @param str
 * @returns {{cipher: string, server: string, password: string, port: string, name: string, type: string}}
 */
export function decode_ss(str) {
    let url = 'ss://YWVzLTI1Ni1nY206ZzVNZUQ2RnQzQ1dsSklkQDE5OC41Ny4yNy4yMTg6NTAwNA==#v2rayse_test'
    let urlParams = new URL(url)
    let base64Str = urlParams.pathname.replace('//', '')
    let decodeArr1 = (window.atob(base64Str)).split(':')
    let decodeArr2 = decodeArr1[1].split('@')
    return {
        type: urlParams.protocol.replace(':', ''),
        name: urlParams.hash.replace('#', ''),
        server: decodeArr2[1],
        port: decodeArr1[2],
        cipher: decodeArr1[0],
        password: decodeArr2[0],
    }
}

/**
 * 解析ssr协议
 * @param str
 * @returns {{cipher: string, server: string, protocol: string, password: string, obfs: string, port: string, name: string, type: string}}
 */
export function decode_ssr(str) {
    let url = 'ssr://MjAuMjM5LjQ5LjQ0OjU5ODE0Om9yaWdpbjpub25lOnBsYWluOk0yUm1OVGN5TnpZdE1ETmxaaTAwTldObUxXSmtaRFF0TkdWa1lqWmtabUZoTUdWbS8/Z3JvdXA9YUhSMGNITTZMeTkyTW5KaGVYTmxMbU52YlE9PSZyZW1hcms9ZGpKeVlYbHpaVjkwWlhOMA=='
    let urlParams = new URL(url)
    let base64Str = urlParams.pathname.replace('//', '')
    let decodeArr1 = (window.atob(base64Str)).split(':')
    let passwordStr = decodeArr1[5].split('?')[0].replace('/', '')
    let decodePassword = (window.atob(passwordStr))
    return {
        type: urlParams.protocol.replace(':', ''),
        name: urlParams.hash.replace('#', ''),
        server: decodeArr1[0],
        port: decodeArr1[1],
        protocol: decodeArr1[2],
        cipher: 'dummy',
        obfs: decodeArr1[4],
        password: decodePassword,
    }
}

/**
 * 解析vmess协议
 * @param str
 * @returns {{"ws-opts": {path: string}, cipher: string, server, port, name: string, alterId: *, type: string, uuid, network: *}}
 */
export function decode_vmess(str) {
    let url = 'vmess://eyJhZGQiOiIxNTQuMjMuMTkwLjE2MiIsInYiOjIsInBzIjoidjJyYXlzZV90ZXN0IiwicG9ydCI6NDQzLCJpZCI6ImI5OTg0Njc0LWY3NzEtNGU2Ny1hMTk4LWM3ZTYwNzIwYmEyYyIsImFpZCI6IjAiLCJzY3kiOiJhdXRvIiwibmV0Ijoid3MiLCJ0eXBlIjoiIiwidGxzIjoiIn0='
    let base64Str = url.replace('vmess://', '')
    let decodeObj = window.atob(base64Str)
    decodeObj = JSON.parse(decodeObj)
    return {
        type: 'vmess',
        name: '',
        'ws-opts': {
            "path":"/"
        },
        server: decodeObj.add,
        port: decodeObj.port,
        uuid: decodeObj.id,
        alterId: decodeObj.aid,
        cipher: decodeObj.scy,
        network: decodeObj.net,
    }
}

/**
 * 解析trojan协议
 * @param str
 * @returns {{udp: boolean, server: string, password: string, "skip-cert-verify": boolean, port: string, name: string, type: string}}
 */
export function decode_trojan(str) {
    let url = 'trojan://bc7593fe-0604-4fbe-a70bYWVzLTI1Ni1nY206Q1VuZFNabllzUEtjdTaclWNFc1RmRBNk5NQU5KSnga3fa58ac5a3ef0-b4ab-11eb-b65e-1239d0255272@ca-trojan.bonds.id:443#v2rayse_test'
    let urlParams = new URL(url)
    let waitStr = urlParams.pathname.replace('//', '')
    let waitArr = waitStr.split('@')
    let hostArr = waitArr[1].split(':')
    return {
        type: urlParams.protocol.replace(':', ''),
        name: 'v2rayse_test_4',
        server: hostArr[0],
        port: hostArr[1],
        password: waitArr[0],
        udp: true,
        'skip-cert-verify': true,
    }
}

/**
 * 解析http协议
 * @param str
 * @returns {{udp: boolean, server: string, password: string, port: string, name: string, type: string, username: string}}
 */
export function decode_http(str) {
    let url = 'http://username:password@124.15.12.24:251'
    let urlParams = new URL(url)
    return {
        type: urlParams.protocol.replace(':', ''),
        name: 'http_proxy',
        server: urlParams.hostname,
        port: urlParams.port,
        username: urlParams.username,
        password: urlParams.password,
        udp: true,
    }
}

/**
 * 解析socks5协议
 * @param str
 * @returns {{udp: boolean, server: string, port: string, name: string, type: string}}
 */
export function decode_socks5(str) {
    let url = 'socks5://124.15.12.24:2312'
    let urlParams = new URL(url)
    return {
        type: urlParams.protocol.replace(':', ''),
        name: 'socks5_proxy',
        server: urlParams.hostname,
        port: urlParams.port,
        udp: true,
    }
}

/**
 * 解析hysteria协议
 * @param str
 * @returns {{udp: boolean, server: string, port: string, name: string, type: string}}
 */
export function decode_hysteria(str) {
    let url = 'hysteria://1.2.3.4:12854?protocol=udp&auth=pekopeko&peer=wechat.com&insecure=1&upmbps=50&downmbps=250&alpn=h3#Hys-1.2.3.4'
    let urlParams = new URL(url)
    let hostArr = urlParams.pathname.replace('//', '').split(':')
    return {
        type: urlParams.protocol.replace(':', ''),
        name: urlParams.hash.replace('#', ''),
        server: hostArr[0],
        port: hostArr[1],
        auth_str: '',
        alpn: 'h3',
        protocol: '',
        up: '',
        down: '',
        sni: '',
        "skip-cert-verify": true,
        "recv_window": 104857600,
        "recv_window_conn": 26214400,
        "disable_mtu_discovery": true
    }
    // {   "type":"hysteria",
    //     "name":"Hys-1.2.3.4",
    //     "server":"1.2.3.4",
    //     "port":12854,
    //     "auth_str":"pekopeko",
    //     "alpn":"h3",
    //     "protocol":"udp",
    //     "up":50,
    //     "down":250,
    //     "sni":"wechat.com",
    //     "skip-cert-verify":true,
    //     "recv_window":104857600,
    //     "recv_window_conn":26214400,
    //     "disable_mtu_discovery":true
    // }
}
