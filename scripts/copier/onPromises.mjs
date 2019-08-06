import {
	access as nativeAccess,
	readdir as nativeReaddir,
	readFile as nativeReadFile,
	writeFile as nativeWriteFile,
	lstat as nativeLstat,
	rmdir as nativeRmdir,
	unlink as nativeUnlink,
	stat as nativeStat,
} from "fs";
import { promisify } from "util";

export const access = promisify(nativeAccess);
export const readdir = promisify(nativeReaddir);
export const readFile = promisify(nativeReadFile);
export const writeFile = promisify(nativeWriteFile);
export const lstat = promisify(nativeLstat);
export const rmdir = promisify(nativeRmdir);
export const unlink = promisify(nativeUnlink);
export const stat = promisify(nativeStat);
