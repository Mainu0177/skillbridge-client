import StudentBookings from "@/features/studentDashboard/components/StudentBookings";
import { getStudentBookings } from "@/features/studentDashboard/services";


export default async function StudentBookingsPage() {

    const {data} = await getStudentBookings();

    return <StudentBookings data={data} />;
}