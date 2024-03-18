import React from 'react';
import {Helmet} from "react-helmet";
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'index.css'


export default function Home() {
    return (
        <div>
            <Helmet>
                <title>QR MENU</title>
            </Helmet>

            <Disclosure as="nav" className="">
                {({ open }) => (
                    <>
                        <div className=" mx-auto my-2.5 max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex  h-16 items-center justify-between">

                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                                    <div className="flex flex-shrink-0 items-center ">
                                        <img className="h-[42px]" src="https://menum.co/storage/logo/restro-theme_logo.png" alt="Your Company"/>
                                    </div>

                                </div>

                                <div className=" right-0 flex items-center mt-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    <button type="button"
                                            className="p-1 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                        Giriş Yap
                                    </button>

                                    <button type="button"
                                            className="p-1 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                        <b>Kayıt Ol</b>
                                    </button>

                                    {/*/!* Profile dropdown *!/*/}
                                    {/*<Menu as="div" className="relative ml-3">*/}
                                    {/*    <div>*/}
                                    {/*        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">*/}
                                    {/*            <span className="absolute -inset-1.5" />*/}
                                    {/*            <span className="sr-only">Open user menu</span>*/}
                                    {/*            <img*/}
                                    {/*                className="h-8 w-8 rounded-full"*/}
                                    {/*                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                                    {/*                alt=""*/}
                                    {/*            />*/}
                                    {/*        </Menu.Button>*/}
                                    {/*    </div>*/}
                                    {/*    <Transition*/}
                                    {/*        as={Fragment}*/}
                                    {/*        enter="transition ease-out duration-100"*/}
                                    {/*        enterFrom="transform opacity-0 scale-95"*/}
                                    {/*        enterTo="transform opacity-100 scale-100"*/}
                                    {/*        leave="transition ease-in duration-75"*/}
                                    {/*        leaveFrom="transform opacity-100 scale-100"*/}
                                    {/*        leaveTo="transform opacity-0 scale-95">*/}
                                    {/*        */}
                                    {/*        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                                    {/*            <Menu.Item>*/}
                                    {/*                {({ active }) => (*/}
                                    {/*                    <a href="replace" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>*/}
                                    {/*                        Your Profile*/}
                                    {/*                    </a>*/}
                                    {/*                )}*/}
                                    {/*            </Menu.Item>*/}
                                    {/*            <Menu.Item>*/}
                                    {/*                {({ active }) => (*/}
                                    {/*                    <a href="replace" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>*/}
                                    {/*                        Settings*/}
                                    {/*                    </a>*/}
                                    {/*                )}*/}
                                    {/*            </Menu.Item>*/}
                                    {/*            <Menu.Item>*/}
                                    {/*                {({ active }) => (*/}
                                    {/*                    <a href="replace" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>*/}
                                    {/*                        Sign out*/}
                                    {/*                    </a>*/}
                                    {/*                )}*/}
                                    {/*            </Menu.Item>*/}
                                    {/*        </Menu.Items>*/}
                                    {/*    </Transition>*/}
                                    {/*</Menu>*/}

                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>



                <div className="hero-section">
                    <div className="grid container">
                        <div className="grid row-auto justify-center">
                            <div className="">
                                <div className="text-center hero-content">

                                        <img src="https://menum.co/templates/restro-theme/images/qr-screen.png" width="196px" height="196px" alt="..."/>

                                    <h1 className="mb-5 text-white">
                                        <strong>
                                                <b className="text-4xl">Yeni Nesil Dijital QR MENÜ Sistemi.</b>
                                        </strong>
                                    </h1>

                                    <h2 className="text-2xl">
                                        <font color="white">Menünü Oluştur Adrese Online, Masada, Odaya veya Gel-Al Siparişe Hemen Başla</font>
                                    </h2>

                                    <a href="https://menum.co/signup" className="p-1 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm mt-6 px-5 py-2.5 me-2 mb-2">
                                        <b>ÜCRETSİZ QR MENÜ OLUŞTUR</b>
                                    </a>

                                    <p className="flex justify-center mt-5">
                                        <br/>
                                    <a href="https://menum.co/menum-ozel-temasi" target="_blank" rel="noopener noreferrer"
                                       className="p-1 text-white bg-green-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                                        <b>Demo Menü 1</b>
                                    </a>
                                    <a href="https://menum.co/restoran-adi" target="_blank" rel="noopener noreferrer"
                                       className="p-1 text-white bg-green-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                                        <b>Demo Menü 2</b>
                                    </a>
                                    <a href="https://menum.co/kendi-menunu-ekle" target="_blank" rel="noopener noreferrer"
                                       className="p-1 text-white bg-green-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                                        <b>Demo Menü 3</b>
                                    </a>
                                    <a href="https://menum.co/Klasik-Tema" target="_blank" rel="noopener noreferrer"
                                       className="p-1 text-white bg-green-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                                        <b>Demo Menü 4</b>
                                    </a>
                                    </p>
                                    <p>
                                </p>
                                    <h3 className="my-5 pt-2 text-white text-2xl hover:text-orange-500"><a href="tel:+905394682110">Bilgi Alın: 0539 468 21 10</a><p></p></h3>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="section  py-10 bg-gray-50">
                    <div className="container my-10">
                        <div className="mx-24">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 justify-center ">

                                <div className="hidden xl:block">
                                    <img src="https://menum.co/gorseller/qr_menu_sistemi.png" alt="..."/>
                                </div>

                                <div className="">
                                    <div className="service_content tabs-header">

                                        <div className="section_title undefined">
                                            <h2 className="text-4xl font-bold text-gray-700">Qr Menü Nedir, Nasıl Çalışır?</h2>
                                            <br/><br/>
                                        </div>

                                        <b>"Qr Menü 1.500 den fazla kullanılarak işletme sahiblerine ve müşterilere kolaylık sağlayan yeni nesil dijital menüdür."</b>
                                        <p className="mt-3">
                                            + İşletme sahipleri kayıt işlemini tamamladıktan ve restoran bilgilerini
                                            girdikten sonra, menülerini hesap panellerinden kolayca oluştururlar veya var
                                            olan menüleri jpg formatında yüklerler. <br/>
                                            + Qr kodlarına logo, firma İsmi, renk, boyutlandırma ve hizalama gibi
                                            özelleştirmeler yapabilirler.<br/>
                                            + Qr kodlarını indirdikten sonra masalarına, broşürlerine, magnetlerine qr kodu
                                            eklerler. <br/>
                                            + Müşteriler telefonlarının kamerasıyla masada veya broşürlerinde bulunan qr
                                            kodu okuturlar. <br/>
                                            + İşletmenin menüsü açılır ve kolay bir şekilde siparişlerini verirler.<br/>
                                            + Siparişler hesap paneline, maile veya whatsapp numaralarasına düşer.<br/>
                                            + Sipariş almak istemeyen işletmeler, sipariş özelliklerini kapatarak sadece
                                            menülerini müşterilerine gösterebilirler.<br/>
                                            + İşletme sahipleri panelden sipariş alındı, hazırlanıyor, hazır ve yola çıktı
                                            seçenekleriyle müşteriye bilgilendirme mesajı atabilirler.<br/>
                                            + İşletme sahipleri web sitelerine menüsünü ekleterek, adrese online sipariş
                                            alabilirler. <br/>
                                            + Sınırsız dil ekleyerek, yabancı müşterilere menünüzü kendi dillerinde gösterme
                                            imkanı sunarsınız. <br/>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="section py-10 my-10 mx-24 px-10">
                <div className="container">
                    <div className="">
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 justify-center">

                            <div className="xl:col-start-1 xl:col-end-8">
                                <div className="tabs-content" id="myTabContent">
                                    <div className="tab active" data-tab-id="1">
                                        <div className="service_img"><img
                                            src="https://menum.co/gorseller/qr-menu-sistemi.png"
                                            alt="..." /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:col-start-8 xl:col-end-13">
                                <div className="pe-6">
                                    <div className="text-4xl font-bold text-gray-700">
                                        <h2>Qr Menü Sistemi</h2> <br/>
                                    </div>
                                    <p><font color="black">Ülkemizde son dönemlerde restoran, kafe, pastane ve otel
                                        gibi işletmeler adına yeni nesil dijital qr menü sistemi kullanılmaya
                                        başlanmıştır. Qr Menünü Oluştur Butonuna tıklayarak üyelik işlemini
                                        tamamladıktan sonra sizde restoran, kafe, pastane veya oteliniz için
                                        menünüzü kolayca oluşturabilirsiniz. Menum.co oldukça kolay ve müşteriler
                                        tarafından tam not alan bir yönetim paneline sahip bir QR menü sistemidir.
                                        İster ücretsiz kullanın, isterseniz 7 gün deneme özelliğiyle sizlerde para
                                        ödemeden sistemi test edebilir siniz. </font></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="section py-10 my-10  px-10 bg-gray-50">
                <div className="mx-24">
                    <div className="">
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 justify-center">

                            <div className="xl:col-start-1 xl:col-end-8">
                                <div className="tabs-content" id="myTabContent">
                                    <div className="tab active" data-tab-id="1">
                                        <div className="service_img"><img
                                            src="https://menum.co/gorseller/qr-menu-olusturucu.png"
                                            alt="Qr Menü Oluşturucu - Yeni Nesil Dijital Menü" width="100%"
                                            height="100%"/></div>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:col-start-8 xl:col-end-13">
                                <div className="">
                                    <div className="text-4xl font-bold text-gray-700">
                                        <h2> Qr Menü Sistemleri Özellikleri</h2> <br/>
                                    </div>
                                    <b> Qr menü genel olarak;</b><p>
                                    Baskı maliyetinden tasarruf sağlar, böylece qr menü ile dijital ortama menü
                                    taşıyarak herhangi menü bastırmak veya güncellemek adına yüksek bedeller
                                    ödenmez.</p><p>
                                    Hijyenik kullanım ve temassız kullanım imkanı sağlar, bu sayede elden ele gezen
                                    menülere son verilmiş olur ve müşteri memnuniyetinizi arttırabilme imkanınız
                                    olur.</p><p>
                                    Sipariş verebilme özelliği sağlar, böylece müşteriler menüyü görüntülüyerek
                                    ister garsona çağırma, isterlerse sepetlerine menü ekleyerek sipairiş
                                    verebilirler.</p><p>
                                    İşletme Sahibi Masadan, Adrese Teslimat, Odaya Servis ve Gel-Al seçenekleriyle
                                    siparişlerini kolay bir şekilde alırlar.</p><p>
                                    En yeni özelliklerimizden biri ve tamamen ücretsiz hosting desteği sağladığımız,
                                    web sitesi olarak kullanım özelliğini kullanarak web sitesi yaptırmanıza gerek
                                    kalmadan siteniz olarak da kendi domain adresinizde kullanabilirsiniz.</p><p>


                                </p></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="section py-10 my-10 mx-24 px-10">
                <div className="container">
                    <div className="">
                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 justify-center">

                            <div className="xl:col-start-1 xl:col-end-6 ">
                                <div className="tabs-content" id="myTabContent">
                                    <div className="tab active" data-tab-id="1">

                                            <OwlCarousel className='owl-theme' loop margin={10} nav={true} dots={false} items={1} autoplay={true} autoplayTimeout={1700}>

                                                <li className="splide__slide" id="login-splide-slide01" role="group"
                                                    aria-roledescription="slide" aria-label="1 of 4" aria-hidden="true">
                                                    <a href="https://menum.co/menum-ozel-temasi" target="_blank"
                                                       rel="noopener noreferrer"
                                                       tabIndex="-1">
                                                        <img
                                                            src="https://menum.co/gorseller/qr_menu_menum_ozel_tema.png"
                                                            alt="Qr Menü Menüm Özel Tema"/>
                                                    </a>
                                                </li>

                                                <li className="splide__slide is-prev" id="login-splide-slide02"
                                                    role="group" aria-roledescription="slide" aria-label="2 of 4"
                                                    aria-hidden="true">
                                                    <a href="https://menum.co/restoran-adi" target="_blank"
                                                       rel="noopener noreferrer"
                                                       tabIndex="-1">
                                                        <img
                                                            src="https://menum.co/gorseller/qr_menu_modern_tema.png"
                                                            alt="Qr Menü Modern Tema" width="100%"
                                                            height="100%"/>
                                                    </a>
                                                </li>

                                                <li className="splide__slide is-active is-visible"
                                                    id="login-splide-slide03" role="group" aria-roledescription="slide"
                                                    aria-label="3 of 4">
                                                    <a href="https://menum.co/Klasik-Tema" target="_blank"
                                                       rel="noopener noreferrer">
                                                        <img
                                                            src="https://menum.co/gorseller/qr_menu_klasik_tema.png"
                                                            alt="Qr Menü Klasik Tema" width="100%"
                                                            height="100%"/>
                                                    </a>
                                                </li>

                                                <li className="splide__slide is-next" id="login-splide-slide04"
                                                    role="group" aria-roledescription="slide" aria-label="4 of 4"
                                                    aria-hidden="true">
                                                    <a href="https://menum.co/kendi-menunu-ekle" target="_blank"
                                                       rel="noopener noreferrer"
                                                       tabIndex="-1">
                                                        <img
                                                            src="https://menum.co/gorseller/qr_menu_kendi_menunu_yukle.png"
                                                            alt="Qr Menü Kendi Menünü Yükle" width="100%"
                                                            height="100%"/>
                                                    </a>
                                                </li>

                                            </OwlCarousel>

                                    </div>
                                </div>
                            </div>

                            <div className="xl:col-start-6 xl:col-end-13">
                                <div className="mt-20">
                                    <div className="text-4xl font-bold text-gray-700">
                                        <h2> Qr Menü ile Sipariş Verme Sistemleri</h2> <br/>
                                    </div>
                                    <p>
                                        <font color="black"> İşletmelere özel olarak oluşturulmuş qr menü ile sipariş
                                            vermek son zamanlarda yaygınlaşmıştır. Müşteriler hiç vakit kaybetmeden
                                            masada, gel-al, odaya servis ve adrese teslim seçenekleriyle menünüzü
                                            görüntüleyerek kolay sipariş verebilirler. Müşterileriniz telefonlarının
                                            kamerasıyla veya qr uygulamasıyla menünüzü kolay bir şekilde görüntüler.
                                        </font>
                                    </p>
                                    <p>
                                        <font color="black">
                                            Personeller yalnızca sipariş hazırlar ve masaya, gel-al, odaya veya adrese paket
                                            teslim ederler. Qr menü kullanımı kolay ve hızlı olan bir menü olmaktadır. Bu
                                            bir sipariş verme sistemi olup sipariş sürecinizi kolaylaştırmak adına
                                            menünüzden direkt olarak herhangi bir sipariş alabilirsiniz. Ayrıca kontrol
                                            panelinden, mail adresinizden veya belirlediğiniz whatsapp numarasından ilgili
                                            siparişleri takip edip sipariş yönetiminizi kolaylaştırabilirsiniz.
                                        </font>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="section py-10 my-10 mx-24 px-10">
                <div className="">
                    <div className="">

                        <div className="">

                            <div className="section-headline centered mt-0 mb-36">
                                <h3>Üyelik Planı</h3>
                            </div>
                        </div>


                        <div className="mt-0">
                            <form name="form1" method="post" action="https://menum.co/membership/changeplan">
                                <div className="billing-cycle-radios mb-32">
                                    <div className="radio billed-yearly-radio">
                                        <input id="radio-yearly" name="billed-type" type="radio" value="yearly"/>
                                        <label htmlFor="radio-yearly"><span
                                            className="radio-label"></span> Yıllık</label>
                                    </div>
                                </div>


                                <div className="grid pricing-plans-container billed-yearly  grid-cols-1 lg:grid-cols-3 gap-4 justify-center">


                                    <div className="pricing-plan ">
                                        <h3>Ücretsiz</h3>
                                        <div className="pricing-plan-label"><strong>
                                            Bedava
                                        </strong></div>
                                        <div className="pricing-plan-features">
                                            <strong>Tüm Özellikler Ücretsiz</strong>
                                            <ul>
                                                <li>✅ 5 Kategori</li>
                                                <li>✅ 5 Kategori Başına Menü</li>
                                                <li>✅ 100 Aylık Tarama</li>
                                                <li>✅ Sınırsız Dil Ekleme</li>
                                                <li>✅ Reklam Yok</li>
                                                <li>✅ Masaya, Adrese, Gel-Al veya Odaya Sipariş Seçenekleri (isteğe
                                                    bağlı)
                                                </li>
                                                <li>✅ Panel Üzerinden Ekle, Güncelle, Sil</li>
                                                <li>✅ İşletme Logosu, Kapak Fotoğrafı ve Bilgileri</li>
                                                <li>✅ 4 Adet Şablon Tasarımı<p>
                                                </p></li>
                                                <li>✅ Kendi Menünü Yükle (JPG Formatında)</li>
                                                <li>✅ Sipariş Fişi Yazdırma</li>
                                                <li>✅ Whatsapp Siparişi (isteğe bağlı)</li>
                                                <li>✅ Whatsapp Sipariş Durum Bildirimi (Örneğin; Merhaba Yavuz Demir
                                                    Siparişiniz Hazır)
                                                </li>
                                                <li>✅ Web Sitesi Olarak Kendi Domain Adresinizde Kullanabilirsiniz.
                                                    (İsteğe Bağlı)
                                                </li>
                                                <li>✅ Garson Çağırma Özelliği (isteğe bağlı)</li>
                                                <li>✅ Firmaya Özgün Renk Seçeneği</li>
                                                <li>✅ Kolay Yönetim Paneli</li>
                                                <li>✅ Sipariş Yönetim Sistemi</li>
                                                <li>✅ QR KareKod Oluşturucu</li>
                                                <li>✅ Markanıza Özel Kişiselleştirme</li>
                                                <li>✅ İlave Güncelleme Ücreti Yok</li>
                                                <li>✅ QR Menü Temaları Kullanabilme</li>
                                                <li>✅ Ürün Fotoğrafı</li>
                                                <li>✅ Komisyon Yok</li>


                                                <li>
                                                        <span className="icon-text yes"><i
                                                            className="icon-feather-check-circle margin-right-2"></i></span>
                                                    Restoranların siparişleri kabul etmesine izin ver
                                                </li>

                                            </ul>
                                        </div>

                                        <a href="https://menum.co/signup"
                                           className="button full-width margin-top-20 ripple-effect">
                                            Mevcut Plan
                                        </a>
                                    </div>


                                    <div className="pricing-plan ">
                                        <h3>7 Gün Ücretsiz Dene</h3>
                                        <div className="pricing-plan-label"><strong>
                                            Deneme
                                        </strong></div>
                                        <div className="pricing-plan-features">
                                            <strong>Tüm Özellikler 7 Gün Ücretsiz Dene</strong>
                                            <ul>
                                                <li>✅ Sınırsız Kategori</li>
                                                <li>✅ Sınırsız Kategori Başına Menü</li>
                                                <li>✅ Sınırsız Aylık Tarama</li>
                                                <li>✅ Sınırsız Dil Ekleme</li>
                                                <li>✅ Reklam Yok</li>
                                                <li>✅ Masaya, Adrese, Gel-Al veya Odaya Sipariş Seçenekleri (isteğe
                                                    bağlı)
                                                </li>
                                                <li>✅ Panel Üzerinden Ekle, Güncelle, Sil</li>
                                                <li>✅ İşletme Logosu, Kapak Fotoğrafı ve Bilgileri</li>
                                                <li>✅ 4 Adet Şablon Tasarımı<p>
                                                </p></li>
                                                <li>✅ Kendi Menünü Yükle (JPG Formatında)</li>
                                                <li>✅ Sipariş Fişi Yazdırma</li>
                                                <li>✅ Whatsapp Siparişi (isteğe bağlı)</li>
                                                <li>✅ Whatsapp Sipariş Durum Bildirimi (Örneğin; Merhaba Yavuz Demir
                                                    Siparişiniz Hazır)
                                                </li>
                                                <li>✅ Web Sitesi Olarak Kendi Domain Adresinizde Kullanabilirsiniz.
                                                    (İsteğe Bağlı)
                                                </li>
                                                <li>✅ Garson Çağırma Özelliği (isteğe bağlı)</li>
                                                <li>✅ Firmaya Özgün Renk Seçeneği</li>
                                                <li>✅ Kolay Yönetim Paneli</li>
                                                <li>✅ Sipariş Yönetim Sistemi</li>
                                                <li>✅ QR KareKod Oluşturucu</li>
                                                <li>✅ Markanıza Özel Kişiselleştirme</li>
                                                <li>✅ İlave Güncelleme Ücreti Yok</li>
                                                <li>✅ QR Menü Temaları Kullanabilme</li>
                                                <li>✅ Ürün Fotoğrafı</li>
                                                <li>✅ Komisyon Yok</li>


                                                <li>
                                                        <span className="icon-text yes"><i
                                                            className="icon-feather-check-circle margin-right-2"></i></span>
                                                    Restoranların siparişleri kabul etmesine izin ver
                                                </li>

                                            </ul>
                                        </div>

                                        <a href="https://menum.co/login"
                                           className="button full-width margin-top-20 ripple-effect">Giriş Yap</a>
                                    </div>


                                    <div className="pricing-plan  recommended ">
                                        <div className="recommended-badge">Önerilen</div>
                                        <h3>Yıllık Sadece 790 ₺</h3>
                                        <div className="pricing-plan-label billed-yearly-label">
                                            <strong>₺790.00</strong>/ Yıllık <p>/Aylık <b>65,83 ₺</b></p></div>


                                        <div className="pricing-plan-features">
                                            <strong>Tüm Özellikler Yıllık Sadece 790 ₺</strong>
                                            <ul>
                                                <li>✅ Sınırsız Kategori</li>
                                                <li>✅ Sınırsız Kategori Başına Menü</li>
                                                <li>✅ Sınırsız Aylık Tarama</li>
                                                <li>✅ Sınırsız Dil Ekleme</li>
                                                <li>✅ Reklam Yok</li>
                                                <li>✅ Masaya, Adrese, Gel-Al veya Odaya Sipariş Seçenekleri (isteğe
                                                    bağlı)
                                                </li>
                                                <li>✅ Panel Üzerinden Ekle, Güncelle, Sil</li>
                                                <li>✅ İşletme Logosu, Kapak Fotoğrafı ve Bilgileri</li>
                                                <li>✅ 4 Adet Şablon Tasarımı<p>
                                                </p></li>
                                                <li>✅ Kendi Menünü Yükle (JPG Formatında)</li>
                                                <li>✅ Sipariş Fişi Yazdırma</li>
                                                <li>✅ Whatsapp Siparişi (isteğe bağlı)</li>
                                                <li>✅ Whatsapp Sipariş Durum Bildirimi (Örneğin; Merhaba Yavuz Demir
                                                    Siparişiniz Hazır)
                                                </li>
                                                <li>✅ Web Sitesi Olarak Kendi Domain Adresinizde Kullanabilirsiniz.
                                                    (İsteğe Bağlı)
                                                </li>
                                                <li>✅ Garson Çağırma Özelliği (isteğe bağlı)</li>
                                                <li>✅ Firmaya Özgün Renk Seçeneği</li>
                                                <li>✅ Kolay Yönetim Paneli</li>
                                                <li>✅ Sipariş Yönetim Sistemi</li>
                                                <li>✅ QR KareKod Oluşturucu</li>
                                                <li>✅ Markanıza Özel Kişiselleştirme</li>
                                                <li>✅ İlave Güncelleme Ücreti Yok</li>
                                                    <li>✅ QR Menü Temaları Kullanabilme</li>
                                                    <li>✅ Ürün Fotoğrafı</li>
                                                    <li>✅ Komisyon Yok</li>


                                                    <li>
                                                        <span className="icon-text yes"><i
                                                            className="icon-feather-check-circle margin-right-2"></i></span>
                                                        Restoranların siparişleri kabul etmesine izin ver
                                                    </li>

                                                </ul>
                                            </div>

                                            <a href="https://menum.co/login"
                                               className="button full-width margin-top-20 ripple-effect">Giriş Yap</a>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="section gray padding-top-65 padding-bottom-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">

                                <div className="section-headline margin-top-0 margin-bottom-45">
                                    <h3>Son Yazılarımız</h3>
                                    <a href="https://menum.co/blog" className="headline-link">Blogu Görüntüle</a>
                                </div>

                                <div className="row">

                                    <div className="col-xl-4">
                                        <a href="https://menum.co/blog/12/menum.co-nedir-ve-nasil-calisir"
                                           className="blog-compact-item-container">
                                            <div className="blog-compact-item">
                                                <img className="lazy-load"
                                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                     data-original="https://menum.co/storage/blog/1683903010645e5222446a2.jpg"
                                                     alt="Menum.co Nedir ve Nasıl Çalışır?"/>
                                                <span className="blog-item-tag">Admin</span>
                                                <div className="blog-compact-item-content">
                                                    <ul className="blog-post-tags">
                                                        <li>10 aylar önce</li>
                                                    </ul>
                                                    <h3>Menum.co Nedir ve Nasıl Çalışır?</h3>
                                                    <p>Menum.co, restoranlar, kafeler, otel işletmeleri için qr menü
                                                        oluşturma
                                                        ve pa...</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-xl-4">
                                        <a href="https://menum.co/blog/11/qr-menu-sistemi-nedir"
                                           className="blog-compact-item-container">
                                            <div className="blog-compact-item">
                                                <img className="lazy-load"
                                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                     data-original="https://menum.co/storage/blog/166758608463655824e1702.jpg"
                                                     alt="Qr Menü Sistemi Nedir?"/>
                                                <span className="blog-item-tag">Admin</span>
                                                <div className="blog-compact-item-content">
                                                    <ul className="blog-post-tags">
                                                        <li>1 yıl önce</li>
                                                    </ul>
                                                    <h3>Qr Menü Sistemi Nedir?</h3>
                                                    <p>Qr menü
                                                        sistemi, mobil ortamda akıllı cihazlarınız üzerinden menü...</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-xl-4">
                                        <a href="https://menum.co/blog/10/qr-menu-olusturma"
                                           className="blog-compact-item-container">
                                            <div className="blog-compact-item">
                                                <img className="lazy-load"
                                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                                     data-original="https://menum.co/storage/blog/166051122662f963fa3afa1.jpg"
                                                     alt="Qr Menü Oluşturma"/>
                                                <span className="blog-item-tag">Admin</span>
                                                <div className="blog-compact-item-content">
                                                    <ul className="blog-post-tags">
                                                        <li>1 yıl önce</li>
                                                    </ul>
                                                    <h3>Qr Menü Oluşturma</h3>
                                                    <p> QR menü siparişleri müşterilerin hizmet almak
                                                        için tercih ettiği b...</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center hero-content">


                                <font color="black">
                                    1. Kaydolun ve birkaç dakika içinde menünüzü oluşturun.<br/>
                                    2. QR kodlarınızı anında yazdırın.<br/>
                                    3. Sipariş almaya hemen başlayın.
                                </font><p></p>


                                <a href="https://menum.co/signup" className="button ripple-effect"><b>ÜCRETSİZ QR MENÜ
                                    OLUŞTUR</b></a><p>

                            </p></div>

                        </div>
                    </div>

                </div>


                <div id="footer">
                    <div className="footer-middle-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-5 col-md-12">
                                    <div className="footer-logo margin-bottom-10">
                                        <img src="https://menum.co/storage/logo/restro-theme_footer_logo.png"
                                             width="193px" height="62px" alt="Menum Logo"/>
                                    </div>
                                    <p>Qr Menü sistemiyle kendi menünüzü üye olarak oluşturabilir ve qr kodunuzu indirip
                                        menünüzü müşterilerinize gösterebilirsiniz. Menum.co</p>

                                </div>
                                <div className="col-xl-1 col-lg-1">
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4">
                                    <div className="footer-links">
                                        <h3>Hesabım</h3>
                                        <ul>
                                            <li><a href="https://menum.co/login">Oturum aç</a></li>
                                            <li>
                                                <hr/>
                                            </li>
                                            <li><a href="https://menum.co/signup">Kayıt Ol</a></li>
                                            <li>
                                                <hr/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4">
                                    <div className="footer-links">
                                        <h3>Faydalı Bağlantılar</h3>
                                        <ul>
                                            <li><a href="https://menum.co/faq">SSS</a></li>
                                            <li>
                                                <hr/>
                                            </li>
                                            <li><a href="https://menum.co/feedback">Geri Bildirim</a></li>
                                            <li>
                                                <hr/>
                                            </li>
                                            <li><a href="https://menum.co/report">Bildiri</a></li>
                                            <li>
                                                <hr/>
                                            </li>
                                            <li><a href="https://menum.co/contact">İletişim</a></li>
                                            <li>
                                                <hr/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4">
                                    <div className="footer-links">
                                        <h3>Bilgi</h3>
                                        <ul>
                                            <li><a href="https://menum.co/blog">Blog</a></li>
                                            <li>
                                                <hr/>
                                            </li>

                                            <li><a href="https://menum.co/page/gizlilik-sozelsmesi">Gizlilik
                                                Sözleşmesi</a></li>
                                            <li>
                                                <hr/>
                                            </li>

                                            <li><a href="https://menum.co/page/iade-kosullari">İade Koşulları</a></li>
                                            <li>
                                                <hr/>
                                            </li>

                                            <li><a href="https://menum.co/page/satis-sozlesmesi">Satış Sözleşmesi</a>
                                            </li>
                                            <li>
                                                <hr/>
                                            </li>

                                            <li><a href="https://menum.co/page/hakkimizda">Hakkımızda</a></li>
                                            <li>
                                                <hr/>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-rows-left">
                                        <div className="footer-row">
                                            <span className="footer-copyright-text">2020 Menum.co Bütün Hakları Saklıdır.</span>
                                            <img src="https://menum.co/gorseller/odeme-logo.PNG" width="510px"
                                                 height="100%" alt="Menum Logo"/>
                                        </div>

                                    </div>
                                    <div className="footer-rows-right">
                                        <div className="footer-row">
                                            <ul className="footer-social-links">
                                            </ul>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}