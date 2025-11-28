
export default function Header() {
    return (
        <div className="border-b-1 border-gray-300 flex justify-between px-6 py-4">
            <div className="flex gap-3 items-center justify-center">
                <img
                    className="w-7 h-7"
                    height={10}
                    width={10}
                    src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-a-logo-simple-and-minimalistic-free-logo-design-template-png-image_5009139.jpg"
                    alt=""
                />
                <span className="font-bold">Logo</span>
            </div>
            <div className="p-2 rounded-full bg-gray-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-user"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                </svg>
            </div>
        </div>
    );
}
