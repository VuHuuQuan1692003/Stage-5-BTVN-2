function classifyScore(score) {
    if (typeof score !== "number" || score < 0 || score > 10) {
        return "Điểm không hợp lệ";
    } else if (score >= 8) {
        return "Giỏi";
    } else if (score >= 6.5) {
        return "Khá";
    } else if (score >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

function getCourseStatusLabel(status) {
    let label;
    switch (status) {
        case "not_started":
            label = "Chưa bắt đầu";
            break;
        case "in_progress":
            label = "Đang học";
            break;
        case "completed":
            label = "Hoàn thành";
            break;
        default:
            label = "Trạng thái không xác định";
    }
    return label;
}

function isPassed(score, passScore) {
    const required = passScore ?? 5;
    return score >= required;
}

function getFinalPrice(price, couponCode) {
    if (typeof price !== "number" || price < 0) {
        return null;
    }
    const normalizedCode =
        typeof couponCode === "string" ? couponCode.trim().toUpperCase() : "";

    let discountPercent = 0;
    switch (normalizedCode) {
        case "WELCOME10":
            discountPercent = 10;
            break;
        case "STUDENT20":
            discountPercent = 20;
            break;
        default:
            discountPercent = 0;
    }

    return price - (price * discountPercent) / 100;
}

function getCertificateResult(progress, average) {
    if (
        typeof progress !== "number" ||
        progress < 0 ||
        progress > 100 ||
        typeof average !== "number" ||
        average < 0 ||
        average > 10
    ) {
        return "Dữ liệu không hợp lệ";
    } else if (progress < 80) {
        return "Chưa đủ tiến độ";
    } else if (average < 5) {
        return "Chưa đủ điểm";
    } else {
        return "Đủ điều kiện cấp chứng chỉ";
    }
}