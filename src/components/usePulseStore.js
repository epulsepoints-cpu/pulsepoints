import { useState, useEffect, useCallback } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';
export function usePulseStore() {
    const [xp, setXp] = useState(0);
    const [gems, setGems] = useState(0);
    const [loading, setLoading] = useState(true);
    const user = getAuth().currentUser;
    useEffect(() => {
        if (!user)
            return;
        const fetch = async () => {
            const ref = doc(db, 'users', user.uid);
            const snap = await getDoc(ref);
            if (snap.exists()) {
                setXp(snap.data().xp || 0);
                setGems(snap.data().gems || 0);
            }
            setLoading(false);
        };
        fetch();
    }, [user]);
    const spendXP = useCallback(async (amount) => {
        if (!user)
            return false;
        if (xp < amount)
            return false;
        const ref = doc(db, 'users', user.uid);
        await updateDoc(ref, { xp: increment(-amount) });
        setXp(xp - amount);
        return true;
    }, [user, xp]);
    const spendGems = useCallback(async (amount) => {
        if (!user)
            return false;
        if (gems < amount)
            return false;
        const ref = doc(db, 'users', user.uid);
        await updateDoc(ref, { gems: increment(-amount) });
        setGems(gems - amount);
        return true;
    }, [user, gems]);
    // Award Bonus Quiz Reward: +50 XP, +1 Gem
    const awardBonusQuizReward = useCallback(async () => {
        if (!user)
            return false;
        const ref = doc(db, 'users', user.uid);
        await updateDoc(ref, { xp: increment(50), gems: increment(1) });
        setXp(xp => xp + 50);
        setGems(gems => gems + 1);
        return true;
    }, [user]);
    return { xp, gems, spendXP, spendGems, loading, awardBonusQuizReward };
}
