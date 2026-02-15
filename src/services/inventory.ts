export function calculateGear(guestCount: number, duration: number){
    const sets = Math.ceil(guestCount/2);

    const gear : Record<string,number> = {
        "Bell Tent": sets,
        "Queen Airbed": sets * 2,
        "Luxury Linens": sets * 4
    }

    if(duration > 3){

        gear["Solar Power Bank - High Capacity"] = 1
    }

    return gear;

}