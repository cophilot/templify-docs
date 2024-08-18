/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Contributer from '../types/Contributer';
import ContributerCard from './ContributerCard/ContributerCard';

const CONTRIBUTERS_URL =
    'https://api.github.com/repos/cophilot/templify/contributors';
const SESSION_STORAGE_KEY = 'tpy-contributers';

/**
 * This is a ContributerSection component
 * @author cophilot
 * @version 1.0.0
 * @created 2024-8-18
 */
function ContributerSection() {
    const [contributers, setContributers] = useState<Contributer[]>([]);

    useEffect(() => {
        const contributersNames = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (contributersNames) {
            setContributers(JSON.parse(contributersNames));
        } else {
            fetchContributersNames().then((names) => {
                setContributers(names);
                sessionStorage.setItem(
                    SESSION_STORAGE_KEY,
                    JSON.stringify(names)
                );
            });
        }
    }, []);

    return (
        <div className="contributer-section">
            {contributers.map((c) => (
                <ContributerCard contributer={c} key={c.name} />
            ))}
        </div>
    );
}
export default ContributerSection;

async function fetchContributersNames(): Promise<Contributer[]> {
    const filterOutNames = ['cophilot', 'dependabot[bot]'];

    const response = await fetch(CONTRIBUTERS_URL);
    const data = await response.json();
    const names: Contributer[] = [];
    data.forEach((contributer: any) => {
        if (!filterOutNames.includes(contributer.login)) {
            names.push({
                name: contributer.login,
                avatar_url: contributer.avatar_url,
                url: contributer.html_url,
            });
        }
    });
    names.sort();
    return names;
}
