import Card from '~/components/Card/Card';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import UserBoxSearch from '~/components/UserBoxSearch';

const cx = classNames.bind(styles);

const adData = [
    {
        id: 1,
        description:
            ' - Giá ngày. + 1PN: 1.3tr/ngày. + 2PN: 1.8tr/ngày. + 3PN: 2.3tr/ngày. - Giá tháng. + Căn hộ 1PN: Giá 13tr/th (65m²). + Căn hộ 2PN: Giá từ 16tr/th (76m², 99m², 106m²). + Căn hộ 3PN: Giá 17tr - 20 tr/th (129m², 138m², 162m²). + Căn hộ 4PN: Giá 25tr - 30 tr/th (162m²). + Căn hộ penthouse: Giá 60 tr/th - 99 tr/th (300 - 1000m²). Nhà được trang bị nội thất đầy đủ, cao cấp, tiện nghi. Hoặc nhà trống, nội thất cơ bản (theo yêu cầu khách hàng).Với đầy đủ ...',
        status: 0,
        address: 'Đại Đồng, Thạch Thất, Hà Nội',
        area: 20,
        cost: 5000000,
        title: 'Cho thuê kho chứa hàng 50m, 100m, 200m, 500m, tại Tp. Hồ Chí Minh, miễn phí quản lý, Bảo vệ 24h',
        full_name: 'Khuất Đinh Quang',
        create_at: '11-09-2024',
        phone_number: '0011223344',
        type: 1,
        images: [
            { id: 1, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
            { id: 2, image_path: 'https://file4.batdongsan.com.vn/crop/283x141/2023/04/17/20230417230207-a221_wm.jpg' },
            { id: 3, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230202-3438_wm.jpg' },
            { id: 4, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230210-69b7_wm.jpg' },
            { id: 5, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
        ],
    },
    {
        id: 2,
        description:
            ' - Giá ngày. + 1PN: 1.3tr/ngày. + 2PN: 1.8tr/ngày. + 3PN: 2.3tr/ngày. - Giá tháng. + Căn hộ 1PN: Giá 13tr/th (65m²). + Căn hộ 2PN: Giá từ 16tr/th (76m², 99m², 106m²). + Căn hộ 3PN: Giá 17tr - 20 tr/th (129m², 138m², 162m²). + Căn hộ 4PN: Giá 25tr - 30 tr/th (162m²). + Căn hộ penthouse: Giá 60 tr/th - 99 tr/th (300 - 1000m²). Nhà được trang bị nội thất đầy đủ, cao cấp, tiện nghi. Hoặc nhà trống, nội thất cơ bản (theo yêu cầu khách hàng).Với đầy đủ ...',
        status: 0,
        address: 'Đại Đồng, Thạch Thất, Hà Nội',
        area: 20,
        cost: 5000000,
        title: 'Cho thuê kho chứa hàng 50m, 100m, 200m, 500m, tại Tp. Hồ Chí Minh, miễn phí quản lý, Bảo vệ 24h',
        full_name: 'Khuất Đinh Quang',
        create_at: '11-09-2024',
        phone_number: '0011223344',
        type: 2,
        images: [
            { id: 1, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
            { id: 2, image_path: 'https://file4.batdongsan.com.vn/crop/283x141/2023/04/17/20230417230207-a221_wm.jpg' },
            { id: 3, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230202-3438_wm.jpg' },
            { id: 4, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230210-69b7_wm.jpg' },
            { id: 5, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
        ],
    },
    {
        id: 3,
        description:
            ' - Giá ngày. + 1PN: 1.3tr/ngày. + 2PN: 1.8tr/ngày. + 3PN: 2.3tr/ngày. - Giá tháng. + Căn hộ 1PN: Giá 13tr/th (65m²). + Căn hộ 2PN: Giá từ 16tr/th (76m², 99m², 106m²). + Căn hộ 3PN: Giá 17tr - 20 tr/th (129m², 138m², 162m²). + Căn hộ 4PN: Giá 25tr - 30 tr/th (162m²). + Căn hộ penthouse: Giá 60 tr/th - 99 tr/th (300 - 1000m²). Nhà được trang bị nội thất đầy đủ, cao cấp, tiện nghi. Hoặc nhà trống, nội thất cơ bản (theo yêu cầu khách hàng).Với đầy đủ ...',
        status: 0,
        address: 'Đại Đồng, Thạch Thất, Hà Nội',
        area: 20,
        cost: 5000000,
        title: 'Cho thuê kho chứa hàng 50m, 100m, 200m, 500m, tại Tp. Hồ Chí Minh, miễn phí quản lý, Bảo vệ 24h',
        full_name: 'Khuất Đinh Quang',
        create_at: '11-09-2024',
        phone_number: '0011223344',
        type: 1,
        images: [
            { id: 1, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
            { id: 2, image_path: 'https://file4.batdongsan.com.vn/crop/283x141/2023/04/17/20230417230207-a221_wm.jpg' },
            { id: 3, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230202-3438_wm.jpg' },
            { id: 4, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230210-69b7_wm.jpg' },
            { id: 5, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
        ],
    },
    {
        id: 4,
        description:
            ' - Giá ngày. + 1PN: 1.3tr/ngày. + 2PN: 1.8tr/ngày. + 3PN: 2.3tr/ngày. - Giá tháng. + Căn hộ 1PN: Giá 13tr/th (65m²). + Căn hộ 2PN: Giá từ 16tr/th (76m², 99m², 106m²). + Căn hộ 3PN: Giá 17tr - 20 tr/th (129m², 138m², 162m²). + Căn hộ 4PN: Giá 25tr - 30 tr/th (162m²). + Căn hộ penthouse: Giá 60 tr/th - 99 tr/th (300 - 1000m²). Nhà được trang bị nội thất đầy đủ, cao cấp, tiện nghi. Hoặc nhà trống, nội thất cơ bản (theo yêu cầu khách hàng).Với đầy đủ ...',
        status: 0,
        address: 'Đại Đồng, Thạch Thất, Hà Nội',
        area: 20,
        cost: 5000000,
        title: 'Cho thuê kho chứa hàng 50m, 100m, 200m, 500m, tại Tp. Hồ Chí Minh, miễn phí quản lý, Bảo vệ 24h',
        full_name: 'Khuất Đinh Quang',
        create_at: '11-09-2024',
        phone_number: '0011223344',
        type: 1,
        images: [
            { id: 1, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
            { id: 2, image_path: 'https://file4.batdongsan.com.vn/crop/283x141/2023/04/17/20230417230207-a221_wm.jpg' },
            { id: 3, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230202-3438_wm.jpg' },
            { id: 4, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230210-69b7_wm.jpg' },
            { id: 5, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
        ],
    },
    {
        id: 5,
        description:
            ' - Giá ngày. + 1PN: 1.3tr/ngày. + 2PN: 1.8tr/ngày. + 3PN: 2.3tr/ngày. - Giá tháng. + Căn hộ 1PN: Giá 13tr/th (65m²). + Căn hộ 2PN: Giá từ 16tr/th (76m², 99m², 106m²). + Căn hộ 3PN: Giá 17tr - 20 tr/th (129m², 138m², 162m²). + Căn hộ 4PN: Giá 25tr - 30 tr/th (162m²). + Căn hộ penthouse: Giá 60 tr/th - 99 tr/th (300 - 1000m²). Nhà được trang bị nội thất đầy đủ, cao cấp, tiện nghi. Hoặc nhà trống, nội thất cơ bản (theo yêu cầu khách hàng).Với đầy đủ ...',
        status: 0,
        address: 'Đại Đồng, Thạch Thất, Hà Nội',
        area: 20,
        cost: 5000000,
        title: 'Cho thuê kho chứa hàng 50m, 100m, 200m, 500m, tại Tp. Hồ Chí Minh, miễn phí quản lý, Bảo vệ 24h',
        full_name: 'Khuất Đinh Quang',
        create_at: '11-09-2024',
        phone_number: '0011223344',
        type: 2,
        images: [
            { id: 1, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
            { id: 2, image_path: 'https://file4.batdongsan.com.vn/crop/283x141/2023/04/17/20230417230207-a221_wm.jpg' },
            { id: 3, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230202-3438_wm.jpg' },
            { id: 4, image_path: 'https://file4.batdongsan.com.vn/crop/140x140/2023/04/17/20230417230210-69b7_wm.jpg' },
            { id: 5, image_path: 'https://file4.batdongsan.com.vn/crop/562x284/2023/04/17/20230417230205-1b13_wm.jpg' },
        ],
    },
];
function Home() {
    return (
        <>
            <UserBoxSearch />
            <div className={cx('content-wrapper')}>
                <div className={cx('main-content')}>
                    {adData.map((data) => {
                        return <Card data={data} />;
                    })}
                </div>
                <div className={cx('sidebar-box')}>
                    <div className={cx('sidebar')}>
                        <div className={cx('header')}>Lọc theo khoảng giá</div>
                        <div className={cx('body')}></div>
                    </div>
                    <div className={cx('sidebar')}>
                        <div className={cx('header')}>Lọc theo diện tích</div>
                        <div className={cx('body')}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;